import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, increment_async, hello } from './actions'

class CounterButtons extends Component {
  render() {
    const { increment, decrement, increment_async, hello } = this.props;
    return (
      <div>
        <button onClick={increment}>+</button>
        <button onClick={increment_async}>Increment Async</button>
        <button onClick={decrement}>-</button>
        <button onClick={hello}>hello</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  increment_async,
  hello
}

export default connect(null, mapDispatchToProps)(CounterButtons);
