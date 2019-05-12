import authReducer from '../../reducers/auth'

test('login should write user id to state', () => {
  const action = { type: 'LOGIN', uid: '123abc' }
  const state = authReducer(undefined, action)

  expect(state).toEqual({ uid: '123abc' })
})

test('logout should clear user id from state', () => {
  const action = { type: 'LOGOUT' }
  const state = authReducer({ uid: '123abc' }, action)

  expect(state).toEqual({})
})
