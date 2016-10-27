//fs = require('fs')
const reader = require('buffered-reader');

function lexer (code) {
    return code.split(/\s+/) 
        .filter(t => t.length > 0) // might not need this?
        .map((t) => {
            return isNaN(t)
                ? {type: 'word', value: t}
                : {type: 'number', value: t}
        });
}


function lexMe (err, source) {
    if (err) return console.log(err);

    return lexer(source.toString());
}

//const lexed = fs.readFile('lexer.js', lexMe);
//console.log(lexed);
//
new reader.DataReader ('lexer.js', { encoding: 'utf8' })
    .on('error', (err) => console.log('err: ', err))
    .on('line', (line) => console.log(lexMe(null, line)))
    .on('end', () => console.log('EOF'))
    .read();
