import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

//perhaps not the best place
moment.locale(navigator.language)

const store = configureStore()

console.log('hi there')
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))
