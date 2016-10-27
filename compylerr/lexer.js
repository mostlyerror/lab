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

            let expr = {
                type: 'CallExpression',
                name: currentToken.value,
                arguments: []
            };
            var num;

            switch (currentToken.value) {
                case 'Paper':
                case 'Pen':
                    num = parseNum(tokens.shift());
                    expr.arguments.push(num);
                    AST.body.push(expr);
                break;

                case 'Line':
                    while (tokens.length && tokens[0].type === 'number') {
                        num = parseNum(tokens.shift());
                        expr.arguments.push(num);
                    }
                    AST.body.push(expr);
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
        console.log('\n\nTOKENIZE:\n ',tokens);

        const ast = parser(tokens);
        console.log('\n\nBUILD AST:\n', JSON.stringify(ast, null, 4));
    })
    .catch(err => console.error(err.message));

