var server = require('./server'),
    router = require('./router'),
    handlers = require('./handlers');

var handle = {};
handle["/"] = handlers.start;
handle["/start"] = handlers.start;
handle["/upload"] = handlers.upload;

server.start(router.route, handle);
