import { render } from 'react-dom'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

import { createTimer } from 'src/utils'

import menu from 'reducers/menu'
import pages, { addPages } from 'reducers/pages'
import askSofie, { addEntries } from 'reducers/askSofie'
import rotatingPhotos, { updateImages, advanceImage } from 'reducers/rotatingPhotos'

import Main from 'components/Main'
import Index from 'components/Index'
import AskSofie from 'components/AskSofie'
import Professional from 'components/Professional'
import Writing from 'components/Writing'
import Music from 'components/Music'
import Art from 'components/Art'
import Headshots from 'components/Headshots'
import Contact from 'components/Contact'

import * as api from 'src/api'

const store = createStore(
  combineReducers({ menu, pages, rotatingPhotos, askSofie, routing }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const rotatingPhotosEntryId = '56B762Mw1iuW2OQ60cgS0Y'
api.client.getEntries({ 'sys.id': rotatingPhotosEntryId }).then((entries) => {
  const images = entries.includes.Asset.map(i => i.fields.file.url)
  store.dispatch(updateImages(images))
})

const askSofieContentTypeId = 'askSofie'
api.client.getEntries({
  content_type: askSofieContentTypeId,
  order: '-sys.createdAt',
}).then((entries) => {
  store.dispatch(addEntries(entries.toPlainObject().items))
})

const pageContentTypeId = 'page'
api.client.getEntries({ content_type: pageContentTypeId }).then((entries) => {
  store.dispatch(addPages(entries.toPlainObject().items))
})

const history = syncHistoryWithStore(hashHistory, store)

const timer = createTimer(() => store.dispatch(advanceImage()))

const div = document.createElement('div')
document.body.appendChild(div)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Index} onEnter={() => timer.fastStart()} onLeave={timer.stop} />
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
