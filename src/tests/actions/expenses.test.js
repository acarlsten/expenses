import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should set up edit expense action object', () => {
  const action = editExpense('123abc', { description: 'what', amount: 43 })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'what',
      amount: 43
    }
  })
})

test('should set up add expense action object with input', () => {
  const expenseData = { description: 'rent', note: 'hi', amount: 55, createdAt: 33 }
  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})

test('should set up add expense action object with default values if input is missing', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
