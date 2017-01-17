// contact information and email form

import { connect } from 'react-redux'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'
import Markdown from 'components/Markdown'

const Contact = page({ heading: 'Contact' }, Markdown)

export default connect(
  (state) => ({
    source: getPageContent(state, '69DVsXod44QKOSqWaacIUy', 'Loading...'),
  })
)(Contact)
