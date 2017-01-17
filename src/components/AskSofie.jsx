// advice column with email contact form

import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'

let AskSofie = (props) => (
  <div>
    <Markdown source={props.source} />
    {props.entries.map((entry) => (
      <div key={entry.sys.id}>
        <h2>{entry.fields.title}</h2>
        <Markdown source={entry.fields.question} softBreak="br" />
        <hr />
        <Markdown source={entry.fields.answer} softBreak="br" />
      </div>
    ))}
  </div>
)

AskSofie = page({ heading: 'Ask Sofie' }, AskSofie)

export default connect(
  (state) => ({
    source: (getPageContent(state, '2idyqdUb2UycUMwAM4sqWq') || 'Loading...'),
    entries: state.entries.askSofie,
  })
)(AskSofie)
