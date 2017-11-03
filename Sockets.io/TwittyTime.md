# Sockets!

## What are sockets?
- Allow for bi-directional communication between server and client-side server
- Collect data, see live feed of online users
- Telephone call vs email - one is live, one is over distance & time


## What do sockets use to function?
- **T**ransmission **C**ontrol **P**rotocol

## How do I set up sockets?
use `server` instead of `app`

The following belongs in your `server/index`:
```
const server = require('http').Server(app);
const io = require('socket.io')(server);
```
```
io.on('connection', function(socket) {
    console.log('we are connected');
})

socket.on('chat message', function(msg) {
    console.log('msg', msg);
    io.emit('chat message', msg);
})

socket.on('disconnect', function(socket) {
    console.log('we are disconnected');
})
```
```
server.listen( PORT, () => console.log(`this ${PORT}`) );
```

To implement sockets on another component:
```
import io from 'socket.io-client';
const socket = io('http://localhost:3005');
```
