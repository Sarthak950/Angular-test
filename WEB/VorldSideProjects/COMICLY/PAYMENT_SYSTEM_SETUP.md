# Helio Pay Payment System Setup

This document describes the implementation of the Helio Pay payment system for the COMICLY platform.

## Overview

The payment system consists of:
- **Frontend**: Payment page with cover selection and Helio Pay integration
- **Backend**: Webhook endpoint to handle payment events
- **Database**: Updated models to track purchased comics

## Frontend Implementation

### Payment Page (`/payments/[comicID]`)

The payment page allows users to:
1. Select from multiple comic covers
2. Choose payment packages (Basic, Premium, Ultimate)
3. Complete payment via Helio Pay popup

**Key Features:**
- Cover selection with visual preview
- Multiple payment options with different paylink IDs
- Helio Pay integration with metadata passing
- Authentication check before payment
- Success/error handling

### API Integration

**Payment Initiation API** (`/api/payments/initiate`):
- Validates user and comic existence
- Checks for existing purchases
- Creates payment metadata for webhook processing
- Returns paylink information

## Backend Implementation

### Webhook System

**Webhook Endpoint**: `/api/webhooks/helio`

**Features:**
- 24/7 webhook processing
- Signature verification (optional)
- Comprehensive error handling
- Request tracking and metrics
- Health monitoring

**Supported Events:**
- `payment.success` - Comic added to user library
- `payment.pending` - Payment in progress
- `payment.failed` - Payment failed
- `payment.cancelled` - Payment cancelled

### Database Updates

**User Model Updates:**
```typescript
purchasedComics: Array<{
  comicId: string;
  purchaseDate: Date;
  transactionId: string;
  amount: number;
  currency: string;
  coverId?: string;
  status: 'active' | 'refunded' | 'cancelled';
}>
```

**Comic Model Updates:**
- Uses existing `salesCount` and `totalRevenue` fields
- Updates `buyers` array with user IDs

## Environment Variables

### Backend (.env)
```bash
# Helio Pay Webhook Configuration
HELIO_WEBHOOK_SECRET=your_webhook_secret_here
HELIO_WEBHOOK_SIGNING_SECRET=your_signing_secret_here
```

### Frontend (.env.local)
```bash
# Helio Pay Configuration
NEXT_PUBLIC_HELIO_NETWORK=test  # or 'mainnet'
```

## Payment Flow

1. **User selects comic cover** → Frontend validates selection
2. **User chooses payment option** → API call to `/api/payments/initiate`
3. **Payment metadata created** → Includes comicId, userId, coverId
4. **Helio Pay popup opens** → With metadata passed to Helio
5. **User completes payment** → Helio sends webhook to backend
6. **Webhook processes payment** → Updates user library and comic stats
7. **User redirected** → To comic reader page

## Testing

### Webhook Testing
```bash
# Run webhook test script
cd comic-backend
node test-webhook.js
```

### Manual Testing
1. Start both frontend and backend servers
2. Navigate to `/payments/[comicID]`
3. Select cover and payment option
4. Complete test payment
5. Verify webhook processing in backend logs

## Monitoring

### Health Endpoints
- **Webhook Health**: `GET /api/webhooks/health`
- **Webhook Metrics**: `GET /api/webhooks/metrics`

### Logging
The system provides comprehensive logging:
- Webhook receipt and processing
- Payment success/failure events
- Error tracking with request IDs
- Performance metrics

## Security Features

1. **Authentication**: Bearer token verification
2. **Signature Verification**: HMAC signature validation (optional)
3. **Input Validation**: Schema validation for webhook payloads
4. **Rate Limiting**: Applied to webhook endpoints
5. **Error Handling**: Comprehensive error responses

## Deployment Considerations

### Production Setup
1. **Webhook URL**: Update Helio dashboard with production webhook URL
2. **Environment Variables**: Set production secrets
3. **SSL/TLS**: Ensure HTTPS for webhook endpoints
4. **Monitoring**: Set up alerts for webhook failures
5. **Backup**: Database backup for purchase records

### Scaling
- Webhook processing is stateless
- Can be horizontally scaled
- Consider message queues for high volume
- Database indexing on purchase fields

## Troubleshooting

### Common Issues

1. **Webhook not receiving events**
   - Check webhook URL in Helio dashboard
   - Verify server is accessible
   - Check firewall/network settings

2. **Payment metadata missing**
   - Verify frontend API call to `/api/payments/initiate`
   - Check user authentication
   - Validate comic and user IDs

3. **Database updates failing**
   - Check database connection
   - Verify user/comic exists
   - Check for duplicate purchases

### Debug Mode
Enable debug logging by setting:
```bash
DEBUG=webhook:*
```

## Support

For issues with:
- **Helio Pay Integration**: Check Helio documentation
- **Webhook Processing**: Review backend logs
- **Frontend Issues**: Check browser console
- **Database Issues**: Verify MongoDB connection

## Future Enhancements

1. **Refund Processing**: Handle refund webhooks
2. **Subscription Payments**: Recurring payment support
3. **Analytics**: Payment analytics dashboard
4. **Notifications**: Email/SMS payment confirmations
5. **Multi-currency**: Support for different currencies
