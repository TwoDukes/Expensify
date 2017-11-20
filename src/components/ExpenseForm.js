import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment();
console.log(now.format('h:mm a dddd MMM Do YYYY'));

export default class ExpenseForm extends React.Component {

  //setup local state
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calenderFocused: false
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

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.)?\d{0,2}$/)){
      this.setState(() => ({ amount }));
    }
  };

  onDateChange= (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onCalenderFocusChange = ({ focused }) => {
    this.setState(() => ({calenderFocused: focused}));
  }

  render(){
    return (
      <div>
        <form>
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
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}