import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { login, logout, startLogin, startLogout } from '../../actions/auth'

const createMockStore = configureMockStore([thunk])

test('should set up login action object', () => {
  const action = login('123abc')

  expect(action).toEqual({ type: 'LOGIN', uid: '123abc' })
})

test('should set up logout action object', () => {
  const action = logout()

  expect(action).toEqual({ type: 'LOGOUT' })
})
