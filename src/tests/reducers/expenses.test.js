import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set up the default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('should add expense', () => {
  const expense = { id: '100', description: 'test', note: '', amount: 100, createdAt: 2000 }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses, expense])
})

test('should remove an expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('shouldnt remove an expense without an id', () => {
  const action = {
    type: 'REMOVE_EXPENSE'
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('shouldnt remove an expense with an invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '5'
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should edit an expense', () => {
  const description = 'whom'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action)

  expect(state[1].description).toBe(description)
})

test('shouldnt edit an expense without an id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: undefined,
    updates: {
      description: 'whom'
    }
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('shouldnt edit an expense with invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates: {
      description: 'whom'
    }
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})
