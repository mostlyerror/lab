
const fs = require('fs')
const split = require('split')
const Transform = require('stream').Transform

const parser = new Transform()
parser._transform = function (data, encoding, done) {
  this.push(parsed)
  done()
}

readStream = fs.createReadStream('workshops')
readStream.on('data', function (chunk) {
  console.log(chunk.toString())
  console.log('--')
})
