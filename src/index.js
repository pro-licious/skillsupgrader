import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';

var config = {
  apiKey: "AIzaSyDqVDmUZvSW0WyutMEC2AzeccYpfGU-kvs",
  authDomain: "skillsupgrader-38053.firebaseapp.com",
  databaseURL: "https://skillsupgrader-38053.firebaseio.com",
  projectId: "skillsupgrader-38053",
  storageBucket: "skillsupgrader-38053.appspot.com",
  messagingSenderId: "1014674836223"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
