import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'ThisIsMyTestUID';
const defaultAuthState = { auth: { uid }};
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
    .ref(`users/${uid}/expenses`)
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
  const store = createMockStore(defaultAuthState);
  //remove item and check if it dispatched correctly
  store
    .dispatch(startRemoveExpense(expenses[2].id))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({type: 'REMOVE_EXPENSE', id: expenses[2].id});

      //check if item was actually removed from firebase
      database
        .ref(`users/${uid}/expenses/${expenses[2].id}`)
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

test('should exit an expense in firebase', (done) => {
  const store = createMockStore(defaultAuthState);

  //setup updates and expected data
  const id = expenses[1].id;
  const updates = {
    description: 'Test',
    note: 'what a good note',
  };

  const expectedData = {
      createdAt: expenses[1].createdAt,
      amount: expenses[1].amount
    };

  //edit item and check if it editExpense was dispatched
  store.dispatch(startEditExpense(id, updates)).then(() => {

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });

    //check if expense was updated on firebase
    database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot) => {
      const editedData = snapshot.val();
      expect(editedData).toEqual({...expectedData,...updates});
      done();
    });

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
  const store = createMockStore(defaultAuthState);
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
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with default data to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
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
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({type: 'SET_EXPENSES', expenses})
      done();
    });
});
