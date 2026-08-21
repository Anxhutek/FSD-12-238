import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
}
);
server.listen(4444, () => {
  console.log('Server is listening on port 4444');
});
