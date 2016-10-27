
// Object Literals
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
