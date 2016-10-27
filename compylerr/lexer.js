fs = require('fs')

function lexer (code) {
    return code.split(/\s+/) 
        .filter(t => t.length > 0) // might not need this?
        .map((t) => {
            return isNaN(t)
                ? {type: 'word', value: t}
                : {type: 'number', value: t}
        })
}


function lexMe (err, source) {
    if (err) return console.log(err)

    const lexed = lexer(source.toString())
    console.log(lexed)
}

fs.readFile('lexer.js', lexMe);
