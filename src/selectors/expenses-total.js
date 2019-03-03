export default (filteredExpenses = []) => {
  return filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0)
}
