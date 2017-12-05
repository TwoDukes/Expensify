//React Imports
import React from 'react';
import ReactDOM from 'react-dom';
//Router import
import AppRouter from './routers/AppRouter';
//Redux imports
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense, startSetExpenses, startAddExpense} from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
//Firebase Import
import './firebase/firebase';
import { firebase, GoogleAuthProvider} from './firebase/firebase'
//scss imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//initialize store
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log('Logged in');    
  }else {
    console.log('Logged out');
  }
});
