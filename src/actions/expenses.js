import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

//async redux startAddExpense for firebase
export const startAddExpense = (expenseData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description='', 
      note='',
      amount=0,
      createdAt=0
    } = expenseData

    const expense = { description, note, amount, createdAt};
    //Send new expense to firebase, then dispatch to local store
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    });
  }
};


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update({...updates}).then(() => {
      dispatch(editExpense(id, updates));
    });
  }
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = (storedExpenses) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    //get all expenses on database
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const tempExpenses = [];
      
      //parse the expenses into an array
      snapshot.forEach(childSnapshot => {
        tempExpenses.push({
            id: childSnapshot.key,
             ...childSnapshot.val()
          });
        });

        //set the expenses to the local redux state
        dispatch(setExpenses(tempExpenses));
    });


  };
};