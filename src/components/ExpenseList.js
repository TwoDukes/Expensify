import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

//returns object for current passed in state
const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
});

//connect expense list to redux store
export default connect(mapStateToProps)(ExpenseList);