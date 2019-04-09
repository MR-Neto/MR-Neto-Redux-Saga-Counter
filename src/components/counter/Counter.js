import React, { Component } from 'react'
import CounterButtons from './CounterButtons';
import CounterTitle from './CounterTitle';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


export default class Counter extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterButtons />
        <CounterTitle />
      </Provider>
    )
  }
}
