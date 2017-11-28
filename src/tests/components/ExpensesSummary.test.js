import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />)
  expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={2353553443} />)
  expect(wrapper).toMatchSnapshot();
});