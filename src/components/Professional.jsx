// resume

import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'

const Professional = page({ heading: 'Professional' }, Markdown)

export default connect(
  (state) => ({
    source: (getPageContent(state, '6akvaZcv9mqKECaCMiUY8m') || 'Loading...'),
  })
)(Professional)
