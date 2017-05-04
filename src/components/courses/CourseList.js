import React from 'react'
import coursesData from '../../core/data/db';

const CourseList = () => {
  return (
    <div>
      {coursesData.courses.map(function(course, index){
          return (
              <div className="col-sm-6 card" key={ index }>
                <div className="card-block">
                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-text">{course.description}</p>
                  <a href="#" className="btn btn-primary">Register Now</a>
                </div>
              </div>
          )
        })}
    </div>
  )
}

export default CourseList