import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './js/components/Header';
import {Account} from './js/components/Account';
import {AppNav} from './js/components/AppNav';

import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated: false,
      user: undefined
    }
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthError = this.handleAuthError.bind(this);
  }

  componentWillMount() {
    this.setState({isAuthenticated:false});
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        this.setState({isAuthenticated:true,user:firebaseUser});
      } else {
        this.setState({isAuthenticated:false,user:undefined});
      }
    })
  }

  handleAuthError(errorMessage) {
    const txtError = document.getElementById('txtError');
    txtError.textContent = errorMessage
  }

  signup() {
    console.log("signup");

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    const email = txtEmail.value;
    const pass = txtPassword.value;

    const auth = firebase.auth();
    var userid = "";
    auth.createUserWithEmailAndPassword(email, pass).then(function(firebaseUser) {
      userid = firebaseUser.uid;
      var userdata = {[userid]:{"email":email}};
      firebase.database().ref("users").set(userdata);
    }).catch(function(error) {
      console.log(error);
      this.handleAuthError(error.message);
    });
  }

  login() {
    console.log("login");
    event.preventDefault();
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    const email = txtEmail.value;
    const pass = txtPassword.value;

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(error => this.handleAuthError(error.message));
  }

  logout() {
    console.log("logout");
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isAuthenticated ? <AppNav user={this.state.user} logout={this.logout}/> : <Account login={this.login} signup={this.signup} user={this.state.user}/>}
      </div>
    );
  }
}

export default App;
