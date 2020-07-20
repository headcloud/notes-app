const http = require('http');

let hostname = process.env.hostname;
console.log(`Environment hostname is ${hostname}`);
if (hostname == null || hostname == "") {
    hostname = '127.0.0.1';
}

let port = process.env.PORT;
console.log(`Environment port is ${port}`);
if (port == null || port == "") {
  port = 8000;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});