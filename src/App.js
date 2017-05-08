import React, { Component } from 'react';
import CoursePage from './components/Courses/CoursePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Instructor-led live & Expert-led Recorded</h2>
          <h4>Free and Premium Online Courses</h4>
        </div>
        <h4>
          <br/>
          Popular Courses
        </h4>

        <div className="container">
          <br/>
          <CoursePage />
        </div>
      </div>
    );
  }
}

export default App;
