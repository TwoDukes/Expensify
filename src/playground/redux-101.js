import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
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
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 21
});

//Reset the count
store.dispatch({type: 'RESET'});

store.dispatch({
  type: 'SET',
  count: 123
})

/////ACTIONS - END/////