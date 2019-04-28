const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id)
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        // trying to change id causes silent failure, for now
        if (expense.id === action.id && !action.updates.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    case 'SET_EXPENSES':
      return action.expenses
    default:
      return state
  }
}
