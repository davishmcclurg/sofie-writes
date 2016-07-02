import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import menu from './menu'

const reducers = combineReducers({ menu })
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

const MenuItem = (props) => <a href={props.link}>{props.text}</a>

const App = (props) => {
  return (
    <div>
      <h1>sofie writes</h1>
      {props.menu.map((item, index) => <MenuItem {...item} key={index} />)}
    </div>
  )
}

const SofieWrites = connect(
  (state) => ({ menu: state.menu.toJS() })
)(App)

const div = document.createElement('div')
document.body.appendChild(div)

render(
  <Provider store={store}>
    <SofieWrites />
  </Provider>,
  div
)
