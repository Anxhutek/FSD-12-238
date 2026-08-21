import http from 'http';

const server = http.createServer((req, res) => {
    console.log('Server hit by client');
    res.write("<h1> hello client part 3 </h1>")
    res.end();
});

server.listen(4444, () => {
    console.log('Server is listening on port 4444');
});