// audio/video gallery with link to tumblr

import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import page from 'components/page'
import Media from 'components/Media'

const ArtEntry = (props) => (
  <div key={props.sys.id}>
    <h1>{props.fields.title}</h1>
    <Markdown source={props.fields.content} />
    {props.fields.media.map((media, index) => <Media key={index} {...media} />)}
  </div>
)

const Art = page({ heading: 'Art' }, (props) => (
  <div>{props.entries.map(ArtEntry)}</div>
))

export default connect(
  (state) => ({
    entries: state.entries.art,
  })
)(Art)
