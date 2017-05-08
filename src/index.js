import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import App from './App';
import Root from './Root';
import About from './components/About/About';
import CoursePage from './components/Courses/CoursePage';

let config = {
  apiKey: "AIzaSyDqVDmUZvSW0WyutMEC2AzeccYpfGU-kvs",
  authDomain: "skillsupgrader-38053.firebaseapp.com",
  databaseURL: "https://skillsupgrader-38053.firebaseio.com",
  projectId: "skillsupgrader-38053",
  storageBucket: "skillsupgrader-38053.appspot.com",
  messagingSenderId: "1014674836223"
};

firebase.initializeApp(config);


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
      <Route path="courses" component={CoursePage} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
