import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="container">
        <input id="txtEmail" type="email" placeholder="Email">
        </input>

        <input id="txtPassword" type="password" placeholder="Password">
        </input>

        <button id="btnLogIn" className="btn btn-action">
          Log In
        </button>

        <button id="btnSignUp" className="btn btn-secondary">
          Sign Up
        </button>

        <button id="btnLogOut" className="btn btn-action">
          Log Out
        </button>
      </div>
    );
  }

}

export default Login;
