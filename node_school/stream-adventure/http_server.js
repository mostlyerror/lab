const http = require('http')
const fs = require('fs')
const through = require('through2')

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function upper (buf, encoding, next) {
      this.push(buf.toString().toUpperCase())
      next()

    })).pipe(res)
  }
})
server.listen(process.argv[2])
