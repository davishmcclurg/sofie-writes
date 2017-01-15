const ADD_PAGES = 'ADD_PAGES'

const defaultState = {
  professional: null,
  contact: null,
}

const professionalPageId = '6akvaZcv9mqKECaCMiUY8m'
const contactPageId = '69DVsXod44QKOSqWaacIUy'

export const addPages = (pages) => ({
  type: ADD_PAGES,
  pages,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PAGES: {
      const actionProfessional = action.pages.find(page => page.sys.id === professionalPageId)
      const actionContact = action.pages.find(page => page.sys.id === contactPageId)
      return {
        ...state,
        professional: actionProfessional || state.professional,
        contact: actionContact || state.contact,
      }
    }
    default:
      return state
  }
}
