// upload audio/video

import { connect } from 'react-redux'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'
import Markdown from 'components/Markdown'
import Media from 'components/Media'

const MusicEntry = (props) => (
  <div key={props.sys.id}>
    <h2>{props.fields.title}</h2>
    <Markdown source={props.fields.content || ''} />
    {props.fields.media.map((media, index) => <Media key={index} {...media} />)}
  </div>
)

const Music = page({ heading: 'Music' }, (props) => (
  <div>
    <Markdown source={props.source} />
    {props.entries.map(MusicEntry)}
  </div>
))

export default connect(
  (state) => ({
    source: getPageContent(state, 'pO8tpNIPqouWuuWmKGska', 'Loading...'),
    entries: state.entries.music,
  })
)(Music)
