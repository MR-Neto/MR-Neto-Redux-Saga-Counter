import React, { Component } from 'react'
import { connect } from 'react-redux'

class CounterTitle extends Component {
  render() {
    const { count } = this.props;

    return (
      <div>
        <h1>
          {count}
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(CounterTitle);
