const ADD_ENTRIES = 'ADD_ENTRIES'

const defaultState = {
  page: [],
  askSofie: [],
  music: [],
  art: [],
}

export const getPageContent = (state, pageId, notFoundContent = null, emptyContent = '') => {
  const page = state.entries.page.find((entry) => entry.sys.id === pageId)
  if (page) {
    return page.fields.content || emptyContent
  }
  return notFoundContent
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
