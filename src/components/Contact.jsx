// contact information and email form

import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'

const Contact = page({ heading: 'Contact' }, Markdown)

export default connect(
  (state) => ({
    source: (getPageContent(state, '69DVsXod44QKOSqWaacIUy') || 'Loading...'),
  })
)(Contact)
