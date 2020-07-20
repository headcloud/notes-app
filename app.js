const http = require('http');

let hostname = process.env.hostname || '0.0.0.0';
console.log(`Environment hostname is ${hostname}`);

let port = process.env.PORT || 8000;
console.log(`Environment port is ${port}`);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});