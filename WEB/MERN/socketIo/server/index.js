const https = require('https').createServer();
const io = require('socket.io')(https, {
    
    cors:{crigin: "*"}

})


io.on('connection',(socket)=>{
    console.log('connected')
    socket.on('message',(message)=>{
        console.log(message)
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`)
        // socket.broadcast.emit('message',data)
    })
})

const port = 8080;
https.listen(port,()=>{
    console.log('server is running on port ', port)
})






// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })
//
// server.on('connection', socket => { 
//
//     socket.on('message', message => {
//
//         socket.send(`Roger that! ${message}`);
//         console.log(`received: ${message}`);
//
//     });
//
// });


