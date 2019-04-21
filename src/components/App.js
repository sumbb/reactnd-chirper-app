import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIntialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIntialData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)