const net = require('net');

var socket = net.createConnection(1234, 'localhost');
socket.on('data', function(data){
  console.log('from server:', data.toString());
});
socket.write('hello');