import React, { Component } from 'react';
import logo from './Mc.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div className="outer">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}


export default App;
