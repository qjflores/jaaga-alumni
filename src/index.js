import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from "firebase";

import './../node_modules/bootstrap/dist/css/bootstrap.css';

var config = {
	apiKey: "AIzaSyAmWH8spRj_dzyyHBJXBzGfF8NCR8G0ISg",
	authDomain: "jaaga-alumni.firebaseapp.com",
	databaseURL: "https://jaaga-alumni.firebaseio.com",
	storageBucket: "jaaga-alumni.appspot.com",
	messagingSenderId: "158513874737"
};
firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
