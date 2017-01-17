// audio/video gallery with link to tumblr

import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'
import Media from 'components/Media'

const ArtEntry = (props) => (
  <div key={props.sys.id}>
    <h2>{props.fields.title}</h2>
    <Markdown source={props.fields.content} />
    {props.fields.media.map((media, index) => <Media key={index} {...media} />)}
  </div>
)

const Art = page({ heading: 'Art' }, (props) => (
  <div>
    <Markdown source={props.source} />
    {props.entries.map(ArtEntry)}
  </div>
))

export default connect(
  (state) => ({
    source: (getPageContent(state, '6noBK9MXAc4oKogUAoQIES') || 'Loading...'),
    entries: state.entries.art,
  })
)(Art)
