import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilters extends React.Component{

  state = {
    calenderFocused: null
  };

  //sends newly selected start and end date to the store
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  OnCalenderFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };

  render(){
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select 
        value={this.props.filters.sortBy}
        onChange={(e) => {
          const sortBy = e.target.value;
          //dispatch new sort filter on select change
          sortBy === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
        }}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.OnCalenderFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);