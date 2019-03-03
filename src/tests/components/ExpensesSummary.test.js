import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import getExpensesTotal from '../../selectors/expenses-total'

test('should render ExpenseSummary with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={0} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={expenses[0].amount} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with several expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={expenses.length} expensesTotal={getExpensesTotal(expenses)} />
  )
  expect(wrapper).toMatchSnapshot()
})
