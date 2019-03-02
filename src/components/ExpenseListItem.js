import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import 'numeral/locales/no'
numeral.locale('no') // same rules as SE

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Summa: {numeral(amount / 100).format('0,0[.]00 $')}</p>
    <p>Skapad: {moment(createdAt).format('LL')}</p>
  </div>
)

export default ExpenseListItem
