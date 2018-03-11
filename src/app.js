import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

//perhaps not the best place
moment.locale(navigator.language)

const store = configureStore()
store.dispatch(addExpense({ description: 'Water bill', amount: 5000, createdAt: 10 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 80000, createdAt: 3000 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 80000, createdAt: 3100 }))
store.dispatch(addExpense({ description: 'rent', amount: 3000, createdAt: 3600 }))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))
