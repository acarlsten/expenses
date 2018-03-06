import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should setup text filter', () => {
  const text = 'test'
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text })

  expect(state.text).toBe(text)
})

test('should setup sort by amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

  expect(state.sortBy).toBe('amount')
})

test('should setup sort by date', () => {
  const currentState = {
    sortBy: 'amount'
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })

  expect(state.sortBy).toBe('date')
})

test('should setup start date', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: moment(0).add(4, 'days')
  })

  expect(state.startDate).toEqual(moment(0).add(4, 'days'))
})

test('should setup end date', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: moment(0).add(4, 'days')
  })

  expect(state.endDate).toEqual(moment(0).add(4, 'days'))
})
