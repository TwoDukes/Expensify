import React from 'react';
import ReactDOM from 'react-dom';
//Router import
import AppRouter from './routers/AppRouter';
//Redux imports
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
//scss imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//initialize store
const store = configureStore();

//getvisibleexpenses -> print visible to screen
store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expenses, state.filters));
})

store.dispatch(addExpense({description: 'Water Bill', amount:247}));
store.dispatch(addExpense({description: 'Gas Bill', amount:114}));
store.dispatch(setTextFilter('gas'))

// console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('app'));