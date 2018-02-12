import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';

import NavBar from './components/header';

class App extends Component {

  componentDidMount () {
    $("#loading-home").remove();
  }

  render() {
    return (
    <div className="App">
        <div className="App-header">
            <h2> Track your cryptocurrencies!</h2>
        </div>
        <NavBar />
         <div id='footer'>
          <p align="center"> Information updated every 10 seconds courtesy of coinmarketcap.com </p>
        </div>
    </div>
    );
  }
}

export default App;
