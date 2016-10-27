
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






