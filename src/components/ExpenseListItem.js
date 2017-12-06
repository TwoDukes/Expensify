import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({id, description, amount, note,  createdAt}) => (
    <Link className='list-item' to={`/edit/${id}`}>
      <div>
        <h3>{description}</h3>
        <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3>{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

//accesing dispatch prop for expense list item and exporting ExpenseListItem
export default ExpenseListItem;