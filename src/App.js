import React, { Component } from 'react';
import './App.css';
import NavBar from './components/header';

class App extends Component {
  render() {
    return (
    <div className="App">
        <div className="App-header">
            <h2> Track your cryptocurrencies!</h2>
        </div>
        <NavBar />
    </div>
    );
  }
}

export default App;
