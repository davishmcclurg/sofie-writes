import React from 'react'
import ReactDOM from 'react-dom'

import * as api from './api'

api.sections().then(sections => {
  sections.forEach(section => {
    console.log(section)
  })
})

const menu = [
  {
    text: 'Ask Sofie',
    image: '',
    link: './'
  }
]

const MenuItem = (props) => <a href={props.link}>{props.text}</a>

const SofieWrites = (props) => {
  return (
    <div>
      <h1>sofie writes</h1>
      {props.menu.map((item, index) => <MenuItem {...item} key={index} />)}
    </div>
  )
}

const div = document.createElement('div')
document.body.appendChild(div)

ReactDOM.render(
  <SofieWrites menu={menu} />,
  div
)
