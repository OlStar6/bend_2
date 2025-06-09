const http = require('http');
<<<<<<< HEAD
const hostname = '127.0.0.1';
const port = 3030;
=======
const hostname = '0.0.0.0';
const port = 3050;
>>>>>>> prod
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World 12345!!!!!!!!');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});