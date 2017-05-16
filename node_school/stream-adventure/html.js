var trumpet = require('trumpet');
var fs = require('fs');
var tr = trumpet();

process.stdin.pipe(tr);
  

var stream = tr.select('.loud').createStream();
stream.pipe(through(function (buf, enc, next) {
  this.push(data.toString().toUpperCase())
  next()
}).pipe(process.stdout)

