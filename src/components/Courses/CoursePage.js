import React, { Component } from 'react'
import CourseList from './CourseList';

class CoursePage extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <CourseList />
        </div>
      </div>
    )
  }
}

export default CoursePage