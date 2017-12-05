import React from 'react';
import {Link, NavLink, Router, Route, Switch} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import createHistory from 'history/createBrowserHistory';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header />

      <Switch>
        <Route path="/" exact={true} component={LoginPage}/>
        <Route path="/dashboard" component={ExpenseDashboardPage}/>        
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      
    </div>
  </Router>
);

export default AppRouter;