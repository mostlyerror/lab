
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
