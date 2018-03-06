import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Summa: {(amount / 100).toLocaleString()} kr</p>
    <p>Skapad: {moment(createdAt).format('LL')}</p>
  </div>
)

export default ExpenseListItem
