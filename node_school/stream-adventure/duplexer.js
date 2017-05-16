var spawn = require('child_process').spawn
var duplexer2 = require('duplexer2')

module.exports = function (cmd, args) {
  // spaw process and return a single stream
  // joining together stdin and stdout here
  var child = spawn(cmd, args)
  return duplexer2(child.stdin, child.stdout)
}
