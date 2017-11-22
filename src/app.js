import React from 'react';
import ReactDOM from 'react-dom';
//Router import
import AppRouter from './routers/AppRouter';
//Redux imports
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
//scss imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//initialize store
const store = configureStore();

//getVisibleExpenses -> print visible to screen
store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expenses, state.filters));
})

store.dispatch(addExpense({description: 'Water Bill', amount:4500}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt:1000}));
store.dispatch(addExpense({description: 'rent', amount:109500}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));