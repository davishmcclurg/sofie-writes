// writing

import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import page from 'components/page'

const WritingEntry = (props) => (
  <div key={props.sys.id}>
    <h1>{props.fields.title}</h1>
    <Markdown source={props.fields.content} />
  </div>
)

const Writing = page({ heading: 'Writing' }, (props) => (
  <div>{props.entries.map(WritingEntry)}</div>
))

export default connect(
  (state) => ({
    entries: state.entries.writing,
  })
)(Writing)
