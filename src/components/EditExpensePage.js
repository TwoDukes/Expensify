import React from 'react';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { startEditExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { CheckModal } from './CheckModal';

export class EditExpensePage extends React.Component {

  state = {
    checkRemove:false
  }

  onSubmit = (expense) => {
    //Send edited expense to store
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  OnCheckRemove = () => {
    this.setState(() => ({checkRemove: true}));
  }

  onRemove = () => {
    //Remove expense from store
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          />
          <button className='button button--secondary' onClick={this.OnCheckRemove}>Remove Expense</button>
          </div>

          <CheckModal
            checkRemove={this.state.checkRemove}
            remove={this.onRemove}
            cancel={() => {this.setState(() => ({checkRemove: false}));}}
          />
      </div>
    );
  }
};

//find expense in store with id in url param
const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);