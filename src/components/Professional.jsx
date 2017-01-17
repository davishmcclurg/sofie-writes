// resume

import { connect } from 'react-redux'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'
import Markdown from 'components/Markdown'

const Professional = page({ heading: 'Professional' }, Markdown)

export default connect(
  (state) => ({
    source: (getPageContent(state, '6akvaZcv9mqKECaCMiUY8m') || 'Loading...'),
  })
)(Professional)
