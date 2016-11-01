import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Text field value is: ' + this.state.value);
  }

  render() {
    return (
      <div className="container">
        <input id="txtEmail" type="email" placeholder="Email" value={this.state.value}
          onChange={this.handleChange} />

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
