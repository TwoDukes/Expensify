import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formatedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
  <div>
    {
      <h3>
        Viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}
      </h3>

    }
  </div>
)};


const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return  {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);