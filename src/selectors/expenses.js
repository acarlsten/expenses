import moment from 'moment'
//get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        if (a.amount > b.amount) {
          return -1
        } else if (a.amount < b.amount) {
          return 1
        }
        // if the amounts are equal check and sort by latest date
        if (a.createdAt < b.createdAt) {
          return 1
        } else if (a.createdAt > b.createdAt) {
          return -1
        } else {
          return 0
        }
      }
    })
}
