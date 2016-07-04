// resume

import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import page from 'components/page'

const Professional = page({ heading: 'Professional' }, Markdown)

export default connect(
  (state) => ({ source: state.pages.getIn(['professional', 'fields', 'content'], 'Loading...') })
)(Professional)
