
var through2 = require('through2')
var split2 = require('split2')

var stream = through2({ objectMode: true }, function (chunk, enc, callback) {
  var string = chunk.toString()
  var result = string.replace(/\n/,'').toUpperCase().split(/[\t]/)
  this.push(result)
  callback()
})

stream.on('data', function (data) {
  var toString = Object.prototype.toString.call(data)
  console.log('type of data: ', toString)
  console.log('data: ', data, '\n')
})

process.stdin
    .pipe(split2())
    .pipe(stream)
