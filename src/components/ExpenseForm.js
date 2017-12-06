import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'


export default class ExpenseForm extends React.Component {

  constructor(props){
    super(props);

  //setup local state
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      expenseButton: props.expense ? 'Update Expense' : 'Add Expense',
      calenderFocused: false,
      error: ''
    }
  }


  //changes description in local state
  onDescriptionChange = (e) => {
    const description = e.target.value; 
    this.setState(() => ({ description }));
  };

  //changes note in local state
  onNoteChange = (e) => {
    const note = e.target.value; 
    this.setState(() => ({ note }));
  };

  //if amount fits format set state and show value
  onAmountChange = (e) => {
    const amount = e.target.value;
    //RegEx: has any amount of numbers until '.' then only 2 more numbers allowed
    if(!amount || amount.match(/^\d+(\.)?\d{0,2}$/)){
      this.setState(() => ({ amount }));
    }
  };

  onDateChange= (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }
  };

  onCalenderFocusChange = ({ focused }) => {
    this.setState(() => ({calenderFocused: focused}));
  };

  //submit expense to callback prop function
  onSubmit = (e) => {
    e.preventDefault();


    if(!this.state.description || !this.state.amount){
      this.setState(() => ({error: 'Please provide description and amount'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render(){
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='text' 
            placeholder='Amount' 
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onCalenderFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            placeholder='Add a note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>{this.state.expenseButton}</button>
        </form>
      </div>
    );
  }
}