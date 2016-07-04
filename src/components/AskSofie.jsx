// advice column with email contact form

/* eslint-disable max-len */

import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import page from 'components/page'

let AskSofie = (props) => (
  <div>
    {props.entries.map(entry => (
      <div key={entry.sys.id}>
        <h1>{entry.fields.title}</h1>
        <Markdown source={entry.fields.question} softBreak="br" />
        <hr />
        <Markdown source={entry.fields.answer} softBreak="br" />
      </div>
    ))}
  </div>
)

AskSofie = page({ heading: 'Ask Sofie' }, AskSofie)

export default connect(
  (state) => ({ entries: state.askSofie.get('entries').toJS() })
)(AskSofie)
