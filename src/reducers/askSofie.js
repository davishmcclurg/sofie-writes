const ADD_ENTRIES = 'ADD_ENTRIES'

const defaultState = {
  entries: [],
}

export const addEntries = (entries) => ({
  type: ADD_ENTRIES,
  entries,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ENTRIES:
      return {
        ...state,
        entries: action.entries,
      }
    default:
      return state
  }
}
