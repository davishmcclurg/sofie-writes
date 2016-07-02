import { render } from 'react-dom'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

import menu from 'reducers/menu'

import Main from 'components/Main'
import Index from 'components/Index'
import AskSofie from 'components/AskSofie'
import Professional from 'components/Professional'
import Writing from 'components/Writing'
import Music from 'components/Music'
import Art from 'components/Art'
import Headshots from 'components/Headshots'
import Contact from 'components/Contact'

const store = createStore(
  combineReducers({ menu, routing }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(hashHistory, store)

const div = document.createElement('div')
document.body.appendChild(div)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Index} />
        <Route path="ask-sofie" component={AskSofie} />
        <Route path="professional" component={Professional} />
        <Route path="writing" component={Writing} />
        <Route path="music" component={Music} />
        <Route path="art" component={Art} />
        <Route path="headshots" component={Headshots} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  </Provider>,
  div
)
