import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'
import 'numeral/locales/no'
numeral.locale('no') // same rules as SE

export const ExpensesSummary = props => (
  <div className="page-header">
    <div className="content-container">
      {props.expensesCount === 0 ? (
        <h1 className="page-header__title">
          Viewing <span>0</span> expenses. There are {props.allExpensesCount} expenses in total.
        </h1>
      ) : (
        <div>
          <h1 className="page-header__title">
            Viewing <span>{props.expensesCount}</span>{' '}
            {props.expensesCount === 1 ? 'expense' : 'expenses'} totalling{' '}
            <span>{numeral(props.expensesTotal / 100).format('0,0[.]00 $')}.</span>
          </h1>
          <p className="page-header__subtitle">
            There are <span>{props.allExpensesCount}</span> expenses in total.
          </p>
        </div>
      )}
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters)),
    expensesCount: selectExpenses(state.expenses, state.filters).length,
    allExpensesCount: state.expenses.length
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
