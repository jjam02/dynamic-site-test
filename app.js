let router = require("./router.js")

let http = require('http');
let http2 = require('http');
http.createServer(function (request, response) {
    const userIP = request.socket.remoteAddress;

    // Get the user's User-Agent string
    const userAgent = request.headers['user-agent'];

    // Log the user's information
    console.log(`User connected: IP Address = ${userIP}, User Agent = ${userAgent}`);

    router.home(request, response);
    router.user(request, response);
}).listen(3000, '192.168.1.140');
console.log('server running at http://192.168.1.140:3000/ ');

http2.createServer(function (request, response) {
    const userIP = request.socket.remoteAddress;

    // Get the user's User-Agent string
    const userAgent = request.headers['user-agent'];

    // Log the user's information
    console.log(`User connected: IP Address = ${userIP}, User Agent = ${userAgent}`);

    router.home(request, response);
    router.user(request, response);
}).listen(3000,);
console.log('server running at http://localhost:3000/ ');

