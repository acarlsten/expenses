import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'
import 'numeral/locales/no'
numeral.locale('no') // same rules as SE

export const ExpensesSummary = props => (
  <div>
    {props.expensesCount === 0 ? (
      <p>Nothing to see here!</p>
    ) : (
      <p>
        Viewing {props.expensesCount} {props.expensesCount === 1 ? 'expense' : 'expenses'} totalling{' '}
        {numeral(props.expensesTotal / 100).format('0,0[.]00 $')}
      </p>
    )}
  </div>
)

const mapStateToProps = state => {
  return {
    expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters)),
    expensesCount: selectExpenses(state.expenses, state.filters).length
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
