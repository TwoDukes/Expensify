import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import { Number } from 'core-js/library/web/timers';

test('Should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', {string: 'yes', number: 25});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {string: 'yes', number: 25}
  })
});

test('should setup add expense object', () => {
  const expenseData = {
    description:'Some Description', 
    note:'A good looking note',
    amount:12345,
    createdAt:54321
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({ 
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description:'', 
      note:'',
      amount:0,
      createdAt:0
    }
  })
})
  