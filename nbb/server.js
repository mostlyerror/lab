
var http = require('http'),
    url = require('url');

function start (route, handle) { 

    function onRequest (request, response) {
        var postData = "";
        var pathName = url.parse(request.url).pathname;
        route(handle, pathName, response, request);
    }


    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;

