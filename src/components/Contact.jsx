// contact information and email form

import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import page from 'components/page'

const Contact = page({ heading: 'Contact' }, Markdown)

export default connect(
  (state) => ({ source: state.pages.getIn(['contact', 'fields', 'content'], 'Loading...') })
)(Contact)
