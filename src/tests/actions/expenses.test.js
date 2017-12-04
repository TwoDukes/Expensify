import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt
    };
  });

  database
    .ref('expenses')
    .set(expensesData)
    .then(() => {
      done();
    });
});

test('Should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123abc'})
});

test('should remove an expense from firebase', (done) => {
  const store = createMockStore({});
  //remove item and check if it dispatched correctly
  store
    .dispatch(startRemoveExpense(expenses[2].id))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({type: 'REMOVE_EXPENSE', id: expenses[2].id});

      //check if item was actually removed from firebase
      database
        .ref(`expenses/${expenses[2].id}`)
        .once('value')
        .then((snapshot) => {
          const removedExpense = snapshot.val();
          expect(removedExpense).toBeNull();
          done();
        })

    })
});

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', {
    string: 'yes',
    number: 25
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      string: 'yes',
      number: 25
    }
  })
});

test('should setup add expense object', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenses[2],
      id: expect.any(String)
    }
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  //send data to store and firebase
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      //check if it got to firebase correctly
      return database
        .ref(`expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with default data to database and store', (done) => {
  const store = createMockStore({});
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  //send data to store and firebase
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultData
        }
      });

      //check if it got to firebase correctly
      return database
        .ref(`expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultData);
      done();
    });
});

test('should setup SET_EXPENSES action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({type: 'SET_EXPENSES', expenses})
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});
  store
    .dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({type: 'SET_EXPENSES', expenses})
      done();
    });
});
