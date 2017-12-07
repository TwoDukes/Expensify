import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expenseCount, expenseTotal, hiddenExpenses}) => {
  const visibleExpenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const hiddenExpenseWord = hiddenExpenses === 1 ? 'expense' : 'expenses';
  const formatedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
  <div className='page-header'>
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {visibleExpenseWord} totalling <span>{formatedExpensesTotal}</span></h1>
      {
        (expenseCount === 0 && hiddenExpenses === 0) ? (
          <span className='page-header__subtitle'></span>
        ) : (
          hiddenExpenses > 0 ? (
            <span className='page-header__subtitle'>{hiddenExpenses} {hiddenExpenseWord} are hidden</span>
          ) : (
            <span className='page-header__subtitle'>All Expenses Visible</span>
          )
        )
      }
      <div className='page-header__actions'>
        <Link className='button' to='/create'>Add Expense</Link>
      </div>
    </div>
  </div>
)};


const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return  {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses),
    hiddenExpenses: state.expenses.length - visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);