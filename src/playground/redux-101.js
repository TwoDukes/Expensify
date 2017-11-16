import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  switch(action.type){

    case 'INCREMENT':
    const incrementBy = action.incrementBy || 1;
      return {
        count : state.count + incrementBy
      }

    case 'DECREMENT':
      return {
        count : state.count - 1
      }

    case 'RESET':
      return {
        count : 0
      }

    default: 
      return state;
  }
});

//setup the store subscription
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

/////ACTIONS - START/////

//Increment the count
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

//Decrement the count
store.dispatch({type: 'DECREMENT'});

//Reset the count
store.dispatch({type: 'RESET'});

/////ACTIONS - END/////