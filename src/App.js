import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseList from './components/courses/CourseList';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: 10
    }
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to SkillsUpgrader !!</h2>
        </div>
        <div className="container">
            <CourseList />
        </div>
      </div>
    );
  }
}

export default App;
