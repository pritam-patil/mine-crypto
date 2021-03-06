import React, { Component } from 'react'
import $ from 'jquery'
import { HashRouter } from 'react-router-dom'
import './App.css'

import NavBar from './components/header'

class App extends Component {
  componentDidMount() {
    $('#loading-home').remove()
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-header">
            <h2> Track your cryptocurrencies!</h2>
          </div>
          <NavBar />
        </div>
      </HashRouter>
    )
  }
}

export default App
