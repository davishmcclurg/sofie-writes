// advice column with email contact form

import { connect } from 'react-redux'
import { getPageContent } from 'reducers/entries'

import page from 'components/page'
import Markdown from 'components/Markdown'

import { entry } from 'styles/entry.css'

const AskSofieEntry = (props) => (
  <div key={props.sys.id} className={entry}>
    <h2>{props.fields.title}</h2>
    <Markdown source={props.fields.question} />
    <hr />
    <Markdown source={props.fields.answer} />
  </div>
)

const AskSofie = page({ heading: 'Ask Sofie' }, (props) => (
  <div>
    <Markdown source={props.source} />
    {props.entries.map(AskSofieEntry)}
  </div>
))

export default connect(
  (state) => ({
    source: getPageContent(state, '2idyqdUb2UycUMwAM4sqWq', 'Loading...'),
    entries: state.entries.askSofie,
  })
)(AskSofie)
