var http = require('http');
var app=http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, "0.0.0.0");
console.log('Server running at http://127.0.0.1:8080');
