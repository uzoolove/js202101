const http = require('http');

http.createServer(function(socket){
  console.log(socket.remoteAddress, '접속');
  socket.on('data', function(data){
    console.log('from client:', data.toString());
    // socket.write(data);
    socket.write('HTTP/1.1 200 OK\n');
    socket.write('Content-Type: text/html;charset=utf-8\n');
    socket.write('\n');
    socket.end('<h1>안녕.</h1>');
  });
}).listen(1234, function(){
  console.log('TCP 서버 구동.');
});
