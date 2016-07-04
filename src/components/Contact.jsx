// contact information and email form

import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import page from 'components/page'

const Professional = page({ heading: 'Professional' }, Markdown)

export default connect(
  (state) => ({ source: state.pages.getIn(['contact', 'fields', 'content'], 'Loading...') })
)(Professional)
