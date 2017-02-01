const {server} = require('./app');
const io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('action', (data)=>{
    console.log(data);
    socket.emit('action', data);
  });
});