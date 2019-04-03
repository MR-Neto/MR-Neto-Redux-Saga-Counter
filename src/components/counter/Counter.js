import React, { Component } from 'react'
import CounterButtons from './CounterButtons';
import CounterTitle from './CounterTitle';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
const store = createStore(reducer)


export default class Counter extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterButtons/>
        <CounterTitle />  
      </Provider>
    )
  }
}
