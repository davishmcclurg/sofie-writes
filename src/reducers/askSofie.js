const ADD_ENTRIES = 'ADD_ENTRIES'

const defaultState = Immutable.fromJS({
  entries: Immutable.Set(),
})

export const addEntries = (entries) => ({
  type: ADD_ENTRIES,
  entries,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ENTRIES:
      return state.merge({ entries: action.entries })
    default:
      return state
  }
}
