const ADD_ENTRIES = 'ADD_ENTRIES'

const defaultState = {
  page: [],
  askSofie: [],
  writing: [],
}

export const getPageContent = (state, pageId) => {
  const page = state.entries.page.find((entry) => entry.sys.id === pageId)
  return page ? page.fields.content : null
}

export const addEntries = (contentTypeId, entries) => ({
  type: ADD_ENTRIES,
  contentTypeId,
  entries,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ENTRIES:
      return {
        ...state,
        [action.contentTypeId]: action.entries,
      }
    default:
      return state
  }
}
