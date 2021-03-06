import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from '../components/Dashboard'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
}

export default connect()(App)
