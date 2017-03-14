//var expect = require('expect');
//var Redux = require('redux');

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}
// redux calls whenever an action is dispatched
store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});


//expect(
  //counter(0, { type: 'INCREMENT' })
//).toEqual(1);

//expect(
  //counter(1, { type: 'INCREMENT' })
//).toEqual(2);

//expect(
  //counter(2, { type: 'DECREMENT' })
//).toEqual(1);

//expect(
  //counter(1, { type: 'DECREMENT' })
//).toEqual(0);

//expect(
  //counter(0, { type: 'SOMETHING_ELSE' })
//).toEqual(0);

//console.log('Test passed!');
