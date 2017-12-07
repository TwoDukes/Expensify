//React Imports
import React from 'react';
import ReactDOM from 'react-dom';
//Router import
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
//Redux imports
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense, startSetExpenses, startAddExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
//Firebase Import
import './firebase/firebase';
import { firebase } from './firebase/firebase'
//scss imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//initialize store
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//App Renders after load
let hasRendered = false;
const renderApp = (force = false) => {
  if(!hasRendered || force){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}


//handles sending user to correct page on login/logout
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid));
    //Shows loading screen before app loads 
    ReactDOM.render(<LoadingPage />, document.getElementById('app'));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp(true);
      if(history.location.pathname === '/'){
        history.push('/dashboard');
      }
    });  
  }else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
