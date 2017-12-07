import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Expenses</div>
      <div className='show-for-desktop'>Expense</div>
      <div className='show-for-desktop'>Amount</div>
    </div>
    <div className="list-body">
    {
      (props.expenseCount === 0 && props.hiddenExpenses === 0) ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses found</span>
            <span>under current search terms</span>
          </div>
        ) : (
          props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
          ))
        )
      )
    }
      {

      }
    </div>
  </div>
);

//returns object for current passed in state
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return  {
    expenseCount: visibleExpenses.length,
    expenses: visibleExpenses,
    hiddenExpenses: state.expenses.length - visibleExpenses.length
  };
};
//connect expense list to redux store
export default connect(mapStateToProps)(ExpenseList);