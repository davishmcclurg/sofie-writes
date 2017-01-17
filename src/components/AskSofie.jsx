// advice column with email contact form

import { connect } from 'react-redux'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'
import Markdown from 'components/Markdown'

let AskSofie = (props) => (
  <div>
    <Markdown source={props.source} />
    {props.entries.map((entry) => (
      <div key={entry.sys.id}>
        <h2>{entry.fields.title}</h2>
        <Markdown source={entry.fields.question} />
        <hr />
        <Markdown source={entry.fields.answer} />
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
