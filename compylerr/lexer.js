const readFile = require('fs-readfile-promise'),
      chalk = require('chalk');

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

function parser (tokens) {
    const AST = {
        type: 'Drawing',
        body: []
    };

    while (tokens.length > 0) {
        const currentToken = tokens.shift();
        if (currentToken.type === 'word') {

            switch (currentToken.value) {
                case 'Paper':
                    const expr = {
                        type: 'CallExpression',
                        name: 'Paper',
                        arguments: []
                    };

                    const num = parseNum(tokens.shift());
                    expr.arguments.push(num);
                    AST.body.push(expr);

                break;

                case 'Pen':
                    // ...
                break;

                case 'Line':
                    // ...
                break;
            }
        }
    }
    return AST;
}

function parseNum (token) {
    if (token.type !== 'number') throw(expr.name + ' node must be followed by a number.');
    return {
        type: 'NumberLiteral',
        value: token.value
    }
}




const file = process.argv.pop()

readFile(file)
    .then(buffer => {
        const tokens = lexer(buffer)
        console.log(tokens);

        const parsed = parser(tokens);
        console.log(parsed);
    })
    .catch(err => console.error(err.message));

