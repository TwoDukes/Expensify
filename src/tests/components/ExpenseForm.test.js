import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render Error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  //submit form with no data
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  //check if error state was set
  expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('Should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New description";
  //fill input with description data
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  //check if description state was set to correct value
  expect(wrapper.state('description')).toBe(value);
});

test('Should set note on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New note";
  //fill input with note data
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  //check if note state was set to correct value
  expect(wrapper.state('note')).toBe(value);
});

test('Should set amount if valid data', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "12.53";
  //fill input with amount data
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  //check if amount state was set to correct value
  expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount if invalid data', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "12.53657";
  //fill input with invalid amount data
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  //check if amount state was not set
  expect(wrapper.state('amount')).toBe('');
});

test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
  //submit form with prop expense data
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  });
});

//TODO: Fix tests below for new calender format

// test('Should set new date on date change', () => {
//   const now = moment();
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//   expect(wrapper.state('createdAt')).toEqual(now);
// });

// test('Should set focused on calender focus change', () => {
//   const focused = true;
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//   expect(wrapper.state('calenderFocused')).toEqual(focused);
// });