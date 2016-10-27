const readFile = require('fs-readfile-promise');

function lexer (sourceBuffer) {
    return sourceBuffer
        .toString()
        .split(/\s+/) 
        .filter(t => t.length > 0) // might not need this?
        .map((t) => {
            return isNaN(t)
                ? {type: 'word', value: t}
                : {type: 'number', value: t}
        });
}

readFile('lexer.js')
    .then(buffer => {
        const lexed = lexer(buffer)
        console.log(lexed);
    })
    .catch(err => console.error(err.message));

