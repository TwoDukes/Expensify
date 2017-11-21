import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should setup default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should note remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense:{
      id: '4',
      description: 'Gas',
      amount: 1500,
      createdAt: 345678
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates:{
      description: 'Gas',
      amount: 1500,
      createdAt: 345678
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({...expenses[1], ...action.updates});
});

test('Should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates:{
      description: 'Gas',
      amount: 1500,
      createdAt: 345678
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});