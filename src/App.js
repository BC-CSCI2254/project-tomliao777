import React, { Component } from 'react';
import logo from './Mc.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Here is your Big Mac</h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
