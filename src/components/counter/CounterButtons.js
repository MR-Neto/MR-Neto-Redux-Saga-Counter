import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

class CounterButtons extends Component {
  render() {
    const { increment, decrement } = this.props;
    return (
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(null, mapDispatchToProps)(CounterButtons);
