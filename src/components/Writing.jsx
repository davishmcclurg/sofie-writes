// writing

import { connect } from 'react-redux'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'
import Markdown from 'components/Markdown'

const Writing = page({ heading: 'Writing' }, Markdown)

export default connect(
  (state) => ({
    source: getPageContent(state, '5wW1qQ0KBOMQUyGoqe4gC0', 'Loading...'),
  })
)(Writing)
