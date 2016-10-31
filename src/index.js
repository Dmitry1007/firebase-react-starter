import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDw9Hx9ZFplOok0h0bZJXTthOqjG3p316w",
  authDomain: "fir-react-starter-b4872.firebaseapp.com",
  databaseURL: "https://fir-react-starter-b4872.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "581406812155"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
