import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIntialData } from '../actions/shared';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIntialData())
  }
  render() {
    return (
      <div>
        {this.props.loading === true 
            ? <h3>Loading App....</h3>
            : <Dashboard/> }
        
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
   return {
     loading : authedUser === null
   }
}

export default connect(mapStateToProps)(App)