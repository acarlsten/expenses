import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return [...state, action.expense]
  case 'REMOVE_EXPENSE':
    return state.filter(({ id }) => id !== action.id)
  case 'EDIT_EXPENSE':
    return state.map(expense => {
      // trying to change id causes silent failure, for now
      if (expense.id === action.id && !action.updates.id) {
        return {
          ...expense,
          ...action.updates
        }
      } else {
        return expense
      }
    })
  default:
    return state
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    }
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    }
  case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy: 'amount'
    }
  case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    }
  case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    }
  default:
    return state
  }
}

// get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        // wtf
        // return a.amount < b.amount
        //   ? 1
        //   : a.amount > b.amount
        //     ? -1
        //     : a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0

        if (a.amount > b.amount) {
          return -1
        } else if (a.amount < b.amount) {
          return 1
        }
        // if the amounts are equal check and sort by latest date
        if (a.createdAt < b.createdAt) {
          return 1
        } else if (a.createdAt > b.createdAt) {
          return -1
        } else {
          return 0
        }
      }
    })
}

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'fart', amount: 8900, createdAt: 20000 }))
store.dispatch(addExpense({ description: 'fart', amount: 900, createdAt: 20000 }))
store.dispatch(addExpense({ description: 'fart', amount: 8900, createdAt: 21000 }))
const expenseOne = store.dispatch(
  addExpense({ description: 'rent', amount: 8900, createdAt: -3310 })
)
store.dispatch(addExpense({ description: 'fart', amount: 900, createdAt: 20000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'mat', amount: 900, createdAt: -123 }))
const expenseThree = store.dispatch(
  addExpense({ description: 'matte', amount: 10, createdAt: 1203 })
)
const expenseFour = store.dispatch(addExpense({ description: 'fort', amount: 8900 }))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { id: 'fart', amount: 500 }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
// store.dispatch(setTextFilter('mat'))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// // store.dispatch(setStartDate())
// store.dispatch(setEndDate(1000))
// store.dispatch(setEndDate())

const demoState = {
  expenses: [
    {
      id: 'pasdasdas',
      description: 'Janny rent',
      note: 'this was the final puyment :-^)',
      amount: 890000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}
