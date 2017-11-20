import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, note,  createdAt, dispatch}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

//accesing dispatch prop for expense list item and exporting ExpenseListItem
export default ExpenseListItem;