import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    //Send edited expense to store
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = () => {
    //Remove expense from store
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
      <h1>Edit Expense</h1>
        <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit}/>
        <button onClick={this.onRemove}>Remove Expense</button>
      </div>
    );
  }
};

//find expense in store with id in url param
const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps)(EditExpensePage);