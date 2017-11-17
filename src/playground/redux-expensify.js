import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: '35456fdsdssf6',
    description: 'January rent',
    note: 'This was the final payment for that address',
    amount: 54500, //in pennies
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};