# Webhook Documentation for GameBetSol

## Table of Contents
1. [Overview](#overview)
2. [Webhook Architecture](#webhook-architecture)
3. [Current Implementation](#current-implementation)
4. [Security Best Practices](#security-best-practices)
5. [Webhook Types & Events](#webhook-types--events)
6. [Implementation Guide](#implementation-guide)
7. [Testing & Debugging](#testing--debugging)
8. [Error Handling](#error-handling)
9. [Monitoring & Logging](#monitoring--logging)
10. [Production Deployment](#production-deployment)
11. [Troubleshooting](#troubleshooting)

## Overview

Webhooks are HTTP callbacks that allow external services to notify your application about events in real-time. In the GameBetSol project, webhooks are used for:

- **Payment Processing**: Helio payment confirmations
- **Game Events**: Real-time game state updates
- **User Actions**: Authentication and profile changes
- **Blockchain Events**: Solana transaction confirmations

### Key Benefits
- **Real-time Updates**: Instant notifications without polling
- **Decoupled Architecture**: Services communicate asynchronously
- **Scalability**: Handle high-volume events efficiently
- **Reliability**: Retry mechanisms and error handling

## Webhook Architecture

### Current Architecture Diagram
```
┌─────────────────┐    HTTP POST    ┌──────────────────┐
│   External      │ ──────────────► │   Webhook        │
│   Service       │                 │   Endpoint       │
│   (Helio, etc.) │                 │   (/api/webhook) │
└─────────────────┘                 └─────────┬────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │   Authentication │
                                    │   & Validation   │
                                    └─────────┬────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │   Event          │
                                    │   Processing     │
                                    └─────────┬────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │   Database       │
                                    │   Storage        │
                                    └──────────────────┘
```

### Webhook Flow
1. **Event Occurs**: External service triggers an event
2. **HTTP Request**: Service sends POST request to webhook URL
3. **Authentication**: Verify webhook signature/secret
4. **Validation**: Validate request payload and headers
5. **Processing**: Handle the event based on type
6. **Storage**: Store event data in database
7. **Response**: Return appropriate HTTP status code

## Current Implementation

### Helio Payment Webhook

**Location**: `game-stream-front-end/app/api/helio-webhook/route.ts`

```typescript
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Verify webhook signature (optional - recommended)
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.HELIO_WEBHOOK_SECRET}`) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // ✅ Connect to MongoDB
    const client = await clientPromise();
    const db = client.db("helio");
    const collection = db.collection("transactions");

    // ✅ Insert the webhook event
    await collection.insertOne({
      ...body,
      receivedAt: new Date(),
    });

    console.log("✅ Saved Helio transaction:", body);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
```

### Key Features
- **Authentication**: Bearer token verification
- **Database Storage**: MongoDB integration
- **Error Handling**: Try-catch with proper logging
- **Response Format**: JSON response with success status

## Security Best Practices

### 1. Webhook Authentication

#### Bearer Token Authentication
```typescript
// Verify webhook secret
const authHeader = req.headers.get("authorization");
if (authHeader !== `Bearer ${process.env.HELIO_WEBHOOK_SECRET}`) {
  return new NextResponse("Unauthorized", { status: 401 });
}
```

#### HMAC Signature Verification (Recommended)
```typescript
import crypto from 'crypto';

function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Usage
const signature = req.headers.get('x-webhook-signature');
const payload = await req.text();

if (!verifyWebhookSignature(payload, signature, process.env.WEBHOOK_SECRET)) {
  return new NextResponse("Invalid signature", { status: 401 });
}
```

### 2. Request Validation

#### Payload Validation
```typescript
import { z } from 'zod';

const WebhookPayloadSchema = z.object({
  event: z.string(),
  data: z.record(z.any()),
  timestamp: z.string().datetime(),
  id: z.string().uuid(),
});

function validateWebhookPayload(body: any) {
  try {
    return WebhookPayloadSchema.parse(body);
  } catch (error) {
    throw new Error(`Invalid webhook payload: ${error.message}`);
  }
}
```

### 3. Environment Variables

```bash
# .env.local
HELIO_WEBHOOK_SECRET=your_webhook_secret_here
WEBHOOK_SIGNING_SECRET=your_signing_secret_here
WEBHOOK_ENDPOINT_URL=https://your-domain.com/api/webhooks
```

## Webhook Types & Events

### 1. Payment Webhooks

#### Helio Payment Events
```typescript
interface HelioPaymentEvent {
  event: 'payment.completed' | 'payment.failed' | 'payment.pending';
  data: {
    transactionId: string;
    amount: number;
    currency: string;
    status: string;
    userId?: string;
    metadata?: Record<string, any>;
  };
  timestamp: string;
  id: string;
}
```

#### Payment Processing Flow
```typescript
async function handlePaymentWebhook(event: HelioPaymentEvent) {
  switch (event.event) {
    case 'payment.completed':
      await processSuccessfulPayment(event.data);
      break;
    case 'payment.failed':
      await handleFailedPayment(event.data);
      break;
    case 'payment.pending':
      await handlePendingPayment(event.data);
      break;
  }
}
```

### 2. Game Event Webhooks

#### Game State Changes
```typescript
interface GameEventWebhook {
  event: 'game.started' | 'game.completed' | 'game.expired';
  data: {
    gameId: string;
    status: string;
    timestamp: string;
    metadata?: Record<string, any>;
  };
}
```

## Implementation Guide

### 1. Creating a New Webhook Endpoint

#### Step 1: Create Route File
```typescript
// app/api/webhooks/[provider]/route.ts
import { NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/webhook-utils";
import { processWebhookEvent } from "@/lib/webhook-processor";

export async function POST(
  req: Request,
  { params }: { params: { provider: string } }
) {
  try {
    // Step 1: Get raw body for signature verification
    const rawBody = await req.text();
    
    // Step 2: Verify signature
    const signature = req.headers.get('x-webhook-signature');
    if (!verifyWebhookSignature(rawBody, signature, process.env.WEBHOOK_SECRET)) {
      return new NextResponse("Invalid signature", { status: 401 });
    }
    
    // Step 3: Parse JSON payload
    const payload = JSON.parse(rawBody);
    
    // Step 4: Process webhook event
    await processWebhookEvent(params.provider, payload);
    
    // Step 5: Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Webhook error for ${params.provider}:`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
```

#### Step 2: Create Webhook Utilities
```typescript
// lib/webhook-utils.ts
import crypto from 'crypto';
import { z } from 'zod';

export function verifyWebhookSignature(
  payload: string,
  signature: string | null,
  secret: string
): boolean {
  if (!signature) return false;
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

export function validateWebhookPayload<T>(
  payload: any,
  schema: z.ZodSchema<T>
): T {
  try {
    return schema.parse(payload);
  } catch (error) {
    throw new Error(`Invalid webhook payload: ${error.message}`);
  }
}
```

## Testing & Debugging

### 1. Local Testing

#### Using ngrok for Local Development
```bash
# Install ngrok
npm install -g ngrok

# Start your Next.js app
npm run dev

# In another terminal, expose your local server
ngrok http 3000

# Use the ngrok URL as your webhook endpoint
# https://abc123.ngrok.io/api/webhooks/helio
```

#### Webhook Testing Tools
```typescript
// test-webhook.ts
import fetch from 'node-fetch';

async function testWebhook() {
  const webhookUrl = 'http://localhost:3000/api/webhooks/helio';
  const payload = {
    event: 'payment.completed',
    data: {
      transactionId: 'test_123',
      amount: 1000,
      currency: 'USD',
      status: 'completed',
    },
    timestamp: new Date().toISOString(),
    id: 'test_webhook_123',
  };
  
  const signature = createSignature(payload, 'your_secret');
  
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-webhook-signature': signature,
    },
    body: JSON.stringify(payload),
  });
  
  console.log('Response:', await response.text());
}
```

### 2. Webhook Testing Endpoints

#### Test Endpoint for Development
```typescript
// app/api/webhooks/test/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  
  console.log('Test webhook received:', body);
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return NextResponse.json({
    success: true,
    message: 'Test webhook processed successfully',
    receivedAt: new Date().toISOString(),
  });
}
```

## Error Handling

### 1. Webhook Error Types

```typescript
enum WebhookErrorType {
  INVALID_SIGNATURE = 'INVALID_SIGNATURE',
  INVALID_PAYLOAD = 'INVALID_PAYLOAD',
  PROCESSING_ERROR = 'PROCESSING_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
}

interface WebhookError {
  type: WebhookErrorType;
  message: string;
  details?: any;
  timestamp: Date;
}
```

### 2. Error Handling Strategy

```typescript
export async function POST(req: Request) {
  try {
    // Validate request
    if (!req.body) {
      throw new WebhookError(
        WebhookErrorType.INVALID_PAYLOAD,
        'Request body is required'
      );
    }
    
    // Process webhook
    const result = await processWebhook(req);
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    // Log error
    console.error('Webhook error:', error);
    
    // Store error in database
    await storeWebhookError(error);
    
    // Return appropriate HTTP status
    if (error.type === WebhookErrorType.INVALID_SIGNATURE) {
      return new NextResponse("Unauthorized", { status: 401 });
    } else if (error.type === WebhookErrorType.INVALID_PAYLOAD) {
      return new NextResponse("Bad Request", { status: 400 });
    } else {
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
}
```

## Monitoring & Logging

### 1. Webhook Logging

```typescript
import logger from '@/lib/logger';

export async function POST(req: Request) {
  const startTime = Date.now();
  const requestId = generateRequestId();
  
  logger.info('Webhook received', {
    requestId,
    method: req.method,
    url: req.url,
    headers: Object.fromEntries(req.headers.entries()),
  });
  
  try {
    const result = await processWebhook(req);
    
    logger.info('Webhook processed successfully', {
      requestId,
      processingTime: Date.now() - startTime,
      result,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('Webhook processing failed', {
      requestId,
      processingTime: Date.now() - startTime,
      error: error.message,
      stack: error.stack,
    });
    
    throw error;
  }
}
```

### 2. Webhook Metrics

```typescript
// lib/webhook-metrics.ts
interface WebhookMetrics {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  lastRequestTime: Date;
}

class WebhookMetricsCollector {
  private metrics: Map<string, WebhookMetrics> = new Map();
  
  recordRequest(provider: string, success: boolean, responseTime: number) {
    const current = this.metrics.get(provider) || {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0,
      lastRequestTime: new Date(),
    };
    
    current.totalRequests++;
    if (success) {
      current.successfulRequests++;
    } else {
      current.failedRequests++;
    }
    
    current.averageResponseTime = 
      (current.averageResponseTime * (current.totalRequests - 1) + responseTime) / 
      current.totalRequests;
    
    current.lastRequestTime = new Date();
    
    this.metrics.set(provider, current);
  }
  
  getMetrics(provider?: string): WebhookMetrics | Map<string, WebhookMetrics> {
    if (provider) {
      return this.metrics.get(provider);
    }
    return this.metrics;
  }
}

export const webhookMetrics = new WebhookMetricsCollector();
```

## Production Deployment

### 1. Environment Configuration

#### Production Environment Variables
```bash
# .env.production
WEBHOOK_SECRET=your_production_webhook_secret
HELIO_WEBHOOK_SECRET=your_production_helio_secret
STRIPE_WEBHOOK_SECRET=your_production_stripe_secret
WEBHOOK_ENDPOINT_URL=https://your-production-domain.com/api/webhooks
WEBHOOK_TIMEOUT=30000
WEBHOOK_MAX_RETRIES=3
```

### 2. Security Headers

```typescript
// middleware/security.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers for webhook endpoints
  if (request.nextUrl.pathname.startsWith('/api/webhooks')) {
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  
  return response;
}

export const config = {
  matcher: '/api/webhooks/:path*',
};
```

## Troubleshooting

### Common Issues & Solutions

#### 1. Webhook Not Receiving Events
**Symptoms**: No webhook events in logs
**Solutions**:
- Verify webhook URL is accessible from external service
- Check firewall and network configuration
- Ensure webhook endpoint is publicly accessible
- Verify webhook is enabled in external service dashboard

#### 2. Authentication Failures
**Symptoms**: 401 Unauthorized responses
**Solutions**:
- Verify webhook secret is correct
- Check signature verification logic
- Ensure secret is properly set in environment variables
- Verify request headers contain correct authentication

#### 3. Payload Validation Errors
**Symptoms**: 400 Bad Request responses
**Solutions**:
- Check payload schema validation
- Verify Content-Type header is application/json
- Ensure payload structure matches expected format
- Review webhook documentation for correct payload format

#### 4. Processing Timeouts
**Symptoms**: 504 Gateway Timeout responses
**Solutions**:
- Implement asynchronous processing
- Use webhook queue system
- Optimize database operations
- Increase timeout limits if necessary

### Debugging Tools

#### Webhook Debug Endpoint
```typescript
// app/api/webhooks/debug/route.ts
export async function POST(req: Request) {
  const debugInfo = {
    method: req.method,
    url: req.url,
    headers: Object.fromEntries(req.headers.entries()),
    body: await req.text(),
    timestamp: new Date().toISOString(),
  };
  
  console.log('Webhook Debug Info:', JSON.stringify(debugInfo, null, 2));
  
  return NextResponse.json({
    success: true,
    debug: debugInfo,
  });
}
```

#### Webhook Log Viewer
```typescript
// app/api/webhooks/logs/route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '100');
  const provider = searchParams.get('provider');
  
  const client = await clientPromise();
  const db = client.db("webhooks");
  const collection = db.collection("events");
  
  const query = provider ? { provider } : {};
  const logs = await collection
    .find(query)
    .sort({ receivedAt: -1 })
    .limit(limit)
    .toArray();
  
  return NextResponse.json({ logs });
}
```

## Conclusion

This comprehensive webhook documentation provides a solid foundation for implementing, securing, and maintaining webhooks in the GameBetSol project. Key takeaways:

1. **Security First**: Always implement proper authentication and validation
2. **Error Handling**: Robust error handling with retry mechanisms
3. **Monitoring**: Comprehensive logging and metrics collection
4. **Testing**: Thorough testing with local development tools
5. **Scalability**: Design for high-volume event processing
6. **Maintenance**: Regular monitoring and troubleshooting procedures

For additional support or questions about webhook implementation, refer to the specific provider documentation (Helio, Stripe, etc.) or consult the development team.
