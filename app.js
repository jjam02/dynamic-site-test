let http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    setInterval(function () {
        response.write(new Date() + "\n");

    }, 1000);
}).listen(3000);
console.log('server is working');