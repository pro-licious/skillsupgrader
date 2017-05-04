import React, { Component } from 'react';
import logo from './assets/img/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to SkillsUpgrader</h2>
        </div>
        <p className="App-intro">
          Coming Soon....
        </p>
      </div>
    );
  }
}

export default App;
