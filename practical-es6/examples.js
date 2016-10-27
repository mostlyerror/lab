
// OBJECT LITERALS
//
// prop value shortcuts
var store = {};

var api = { getItem, setItem, clear };

function getItem(key) { 
    return key in store ? store[key] : null;
}

function setItem(key, value) {
    store[key] = value;
}

function clear() {
    store = {};
}


// COMPUTED PROP NAMES

//var expertise = 'journalism';
//var person = {
    //name: 'Sharon',
    //age: 27
//};
//person[expertise] = {
    //years: 5,
    //interests: ['international', 'politics', 'internet']
//};

var expertise = 'journalism';
var person = {
    name: 'Sharon',
    age: 27,
    [expertise]: {
        years: 5,
        interests: ['international', 'politics', 'internet']
    }
};

var grocery = {
    id: 'bananas',
    name: 'Bananas',
    units: 6, 
    price: 10,
    currency: 'USD'
};
var groceries = {
    [grocery.id]: grocery
};


//function getEnevelope (type, description) {
    //var envelope = {
        //data: {}
    //};
    //envelope[type] = description;
    //return envelope;
//}

function getEnevelope (type, description) {
    return {
        data: {},
        [type]: description
    }
}


// METHOD DEFINITIONS

var emitter = {
    emit: function (event) {}
};

// simple obj defining getter and setter
// sort of couples method to an object. hard to extract `deplete` method
// from the object literal.
var reserves = 4;
var spaceship = {
    get fuel () {
        return reserves;
    },
    set fuel (value) {
        reserves = value;
    },
    deplete () {
        reserves = 0;
    }
};
spaceship.fuel = 10;
spaceship.deplete();

// ARROW FUNCTIONS

function name (params) {}
var name  = function (params) {};
// arrow funcs can't have name, bound to lexical scope.
var name = (params) => {};

// LEXICAL SCOPING

var timer = {
    seconds: 0,
    start () {
        // we don't need to do this: 
        // var that = this;
        setInterval(() => {
            // in arrow funcs, `this` and `arguments` refer to 
            // containing scope.
            this.seconds++;
        }, 1000);
    }

};

timer.start();
setTimeout(function () {
    console.log(timer.seconds);
}, 3500);
// -> 3



var example = (params) => {};
// omit parans with one parameter
var double = value => {
    return value * 2;
};

// * combine implicit parens and implicit return for concise funcs
var double = value => value * 2;

// good use case
[1,2,3,4]
    .map(value => value * 2)
    .filter(value => value > 2)
    .forEach(value => console.log(value));

// IMPLICIT RETURNS

// object literals
var objectFactory = () => ({ modular: 'es6' });
// doesn't work, looks like function expression
//[1,2,3].map(value => { number: value }) // -> [undefined, .. ]
//[1,2,3].map(value => { number: value, verified: true }) // syntax error
// works
console.log([1,2,3].map(value => ({ number: value, verified: true }))) // syntax error


// DESTRUCTURING OBJECTS

var character = {
    name: 'Bruno',
    pseudonym: 'Batman',
    metadata: {
        age: 34,
        gender: 'male'
    },
    batarang: ['gas pellet', 'bat-mobile control', 'bat-cuffs']
};
var pseudonym = character.pseudonym;
// same as...
var { pseudonym } = character;
// declare multiple
var { pseudonym, name } = character;
var { pseudonym, name } = character, two = 2;
var { pseudonym: alias } = character; // alias -> 'Batman'
// supports nested structures
var { metadata: { gender } } = character;

var palette = {
    color: {
        name: 'Red',
        code: '#f00'
    }
};
var { color: { code: colorCode } } = palette;

// default valuse for undefined properties
var { boots = true } = character; // <- true
// also in nested
var { metadata: { enemy = 'Satan' } } = character; // <- 'Satan'
// default value with alias
var { boots: footwear = true } = character;
// with computed properties and alias
var person =  { scientist: true };
var type = 'scientist';
var { [type]: value } = person;

// DESTRUCTURING ARRAYS

var coordinates = [12, -7];
var [x, y] = coordinates;
// skip
var names = ['James', 'L.', 'Howlett'];
var [ firstName,,lastName ] = names;
// defaults
var names = ['James', 'L.'];
var [ firstName = 'John', , lastName = 'Doe' ] = names;

// swapping variables in es5
var left = 5;
var right = 7;
var tmp = left;
left = right;
right = tmp;

var left = 5;
var right = 7;
[left, right] = [right, left]; // win.

// DESTRUCTURING FUNCTION PARAMS

// default args
function powerOf (base, exponent = 2) {
    return Math.pow(base, exponent);
}

var double = (input = 0) => input * 2;

function sumOf (a = 1, b = 2, c = 3) { 
    return a + b + c;
}
console.log(sumOf(undefined, undefined, 4)); // <- 7

// use for default options object
function carFactory (options = { brand: 'Volkswagen', year: 1989 }) {
    console.log(options.brand);
    console.log(options.year);
}
carFactory();
// but you lose all defaults if you provide an options object
carFactory({ year: 2000 });

// destructure entirely is nice, but you do lose reference
// to the options object itself.
function carFactory2 ({ brand = 'Volkswagen', year = 1999 }) {
    console.log(brand);
    console.log(year);
}
carFactory2({ year: 2000 });
//carFactory2(); <- error

// better! provide default options object as well
function carFactory3 ({ brand = 'Volkswagen', year = 1999 } = {}) {
    console.log(brand);
    console.log(year);
}
carFactory3({ year: 3000 });
carFactory3(); // no error





