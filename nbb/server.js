
var http = require('http'),
    url = require('url');

function start (route, handle) { 

    function onRequest (request, response) {
        var postData = "";
        var pathName = url.parse(request.url).pathname;

        request.setEncoding('utf8');

        request.addListener('data', function (chunk) {
            postData += chunk;
            console.log("Received data chunk '" + chunk + "'");
        });

        request.addListener('end', function () {
            route(handle, pathName, response, postData);
        });
    }


    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;

