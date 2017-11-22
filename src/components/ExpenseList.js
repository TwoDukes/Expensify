import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
        ))
      )
    }
    {}
  </div>
);

//returns object for current passed in state
const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

//connect expense list to redux store
export default connect(mapStateToProps)(ExpenseList);