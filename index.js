const HTTP = require('http');

//127.0.0.1 = Local address = local loop back - points to our machine all the time every single time
const HOSTNAME = '127.0.0.1';
const PORT = 3333;

//creating our server in javascript
// Every server we create requires two arguments, the request and the response - 
//request is always first, response is always second, no matter what you call the arguments)
const SERVER = HTTP.createServer(function (request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World!")
});

SERVER.listen(PORT, HOSTNAME, function () {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});