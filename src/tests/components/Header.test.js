import { shallow } from 'enzyme'
import React from 'react'
import toJSON from 'enzyme-to-json'
import { Header } from '../../components/Header'

let startLogout, wrapper

beforeEach(() => {
  startLogout = jest.fn()
  wrapper = shallow(<Header startLogout={startLogout} />)
})

test('should render header correctly', () => {
  expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})
