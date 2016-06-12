import locationMiddleware from './middlewares/location'
import assignmentMiddleware from './middlewares/assignment'
import React from 'react'
import reducers from './reducers'
import { createStore, compose, applyMiddleware } from 'redux'

const store = createStore(reducers, compose(
    applyMiddleware(locationMiddleware, assignmentMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default
    store.replaceReducer(nextReducer)
  });
}

export default store
