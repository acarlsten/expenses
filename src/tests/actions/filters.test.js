import moment from 'moment'
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters'

test('should set up textfilter action object with an input', () => {
  const action = setTextFilter('fart')

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'fart'
  })
})

test('should set up textfilter action object with default values if input is missing', () => {
  const action = setTextFilter('')

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should set up sort by date action object', () => {
  const action = sortByDate()

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should set up sort by amount action object', () => {
  const action = sortByAmount()

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should set up start date action object', () => {
  const action = setStartDate(moment(0))

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should set up start date action object with default value if input is missing', () => {
  const action = setStartDate()

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: undefined
  })
})

test('should set up end date action object', () => {
  const action = setEndDate(moment(0))

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should set up end date action object with default value if input is missing', () => {
  const action = setEndDate()

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: undefined
  })
})
