import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { setLocation } from './actions/location'
import App from './components/App'
import Home from './components/Home'
import AssignmentRoute from './containers/Assignment'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

const onChange = (prevLocation, nextLocation) => onEnter(nextLocation)
const onEnter = (nextLocation) => store.dispatch(setLocation(nextLocation))

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} onEnter={onEnter} onChange={onChange}>
        <Route path='/' component={Home}/>
        {AssignmentRoute}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

export default store
