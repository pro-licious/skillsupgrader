import React, { Component } from 'react'
import hadoop_logo from '../../../public/img/hadoop_thumbnail.png'
import sql_logo from '../../assets/img/sql_thumbnail.png';

class CoursePage extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <img className="card-img-top" src={hadoop_logo} width="250px" alt="hadoop logo"/>
                <div className="card-block">
                  <h4 className="card-title">Big Data - Hadoop Architect</h4>
                  <p className="card-text">Instructor-led live online course - The participants will learn the Installation of Hadoop Cluster, understand the basic, advanced concepts of Map Reduce.</p>
                  <a href="http://skillsupgrader.thinkific.com/enroll/115657?et=free" className="btn btn-primary">View Course</a>
                </div>
              </div>
            </div>

             <div className="col-sm-3">
              <div className="card">
                <img className="card-img-top" src={sql_logo} width="250px" alt="hadoop logo"/>
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">View Course</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="card">
                  <img className="card-img-top" src={hadoop_logo} width="250px" alt="hadoop logo"/>
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">View Course</a>
                    </div>
                  </div>
                </div>

              <div className="col-sm-3">
                <div className="card">
                  <img className="card-img-top" src={hadoop_logo} width="250px" alt="hadoop logo"/>
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">View Course</a>
                    </div>
                  </div>
                </div>
          </div>
        )
  }
}

export default CoursePage