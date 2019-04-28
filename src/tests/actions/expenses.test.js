import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import db from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

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
  const action = addExpense(expenses[2])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', done => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Test',
    amount: 3000,
    note: 'testolesto',
    createdAt: 1000
  }

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })

      return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
})

test('should add expense with defaults to database and store', done => {
  const store = createMockStore({})
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      })

      return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults)
      done()
    })
})

// test('should set up add expense action object with default values if input is missing', () => {
//   const action = addExpense()

//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// })
