import {createStore} from 'redux';

//
//Action Generators
//

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => {
  if(isNaN(count)) throw new Error('setCount must be passed a number')
  return {type: 'SET',
          count
          }
};

const resetCount = () => ({
  type: 'RESET'
});


// Reducers
// 1. Reducers are pure functions
// 2. Reducers never change state or action

const countReducer = (state = {count: 0}, action) => {
  switch(action.type){

    case 'INCREMENT':
    const incrementBy = action.incrementBy || 1;
      return {
        count : state.count + incrementBy
      }

    case 'DECREMENT':
    const decrementBy = action.decrementBy || 1;
      return {
        count : state.count - decrementBy
      }

    case 'SET':
      return {
        count : action.count
      }

    case 'RESET':
      return {
        count : 0
      }


    default: 
      return state;
  }
};

const store = createStore(countReducer);


//setup the store subscription
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

/////ACTIONS - START/////

//Increment the count
store.dispatch(incrementCount({incrementBy: 5}));


//Decrement the count
store.dispatch(decrementCount({decrementBy: 26}));

//Reset the count
store.dispatch(resetCount());

//set the count
store.dispatch(setCount({count: 56}));

/////ACTIONS - END/////

