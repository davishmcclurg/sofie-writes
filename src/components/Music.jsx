// upload audio/video

import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import page from 'components/page'

const MusicEntry = (props) => (
  <div key={props.sys.id}>
    <h1>{props.fields.title}</h1>
    <Markdown source={props.fields.content} />
  </div>
)

const Music = page({ heading: 'Music' }, (props) => (
  <div>{props.entries.map(MusicEntry)}</div>
))

export default connect(
  (state) => ({
    entries: state.entries.music,
  })
)(Music)
