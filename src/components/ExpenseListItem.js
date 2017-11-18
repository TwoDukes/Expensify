import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, note,  createdAt, dispatch}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense(id));
    }}>Remove</button>
  </div>
);

//accesing dispatch prop for expense list item and exporting ExpenseListItem
export default connect()(ExpenseListItem);