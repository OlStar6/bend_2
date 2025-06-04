const http = require('http');
const hostname = '0.0.0.0';
<<<<<<< HEAD
const port = 3050;
=======
const port = 3051;
>>>>>>> prod
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World!!!!!!!!');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});