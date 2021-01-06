const net = require('net');

// var socket = net.createConnection(1234, 'localhost');
var socket = net.createConnection(80, 'google.com');
socket.on('data', function(data){
  console.log('from server:', data.toString());
});
// socket.write('hello');
socket.write('GET / HTTP/1.1\n\n');