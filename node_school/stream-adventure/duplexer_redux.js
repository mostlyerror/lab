const duplexer = require('duplexer2')
const through = require('through2')

module.exports = function (counter ) {
  // return duplex stream to count countries on the writable side
  // and pass through `counter` on the readable side
  var histo = {}
  return duplexer(counter, function (data, enc, done) {
    if histo[data.country] {
      histo[data.country]++;
    } else {
      histo[data.country] = 1;
    }
    counter.setCounts(histo)
  })
}
