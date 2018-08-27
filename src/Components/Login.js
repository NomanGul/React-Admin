import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      login: false
    }
  }

  loginHandler(e) {
    e.preventDefault();
    const [email, password] = ["admin@domain.com", "admin"];
    const emailVal = this.emailVal.value;
    const passVal = this.passVal.value;
    emailVal === email && passVal === password ? this.setState({login: true}) : console.log("error")
  }

  render() {
    return (
      <div className="loginMainDiv">
        <div className="card z-depth-5">
          <div className="card-content blue darken-2 white-text">
            <p className="flow-text center-align">Log In</p>
          </div>
          <div className="card-content">
            <div id="login">
              <div className="row">
                <form onSubmit={e => this.loginHandler(e)} className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input ref={el => this.emailVal = el} id="email" type="email" required />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <input ref={el => this.passVal = el} id="password" type="password" required />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <button type="submit" className="btn waves-effect waves-light pink right">
                    Log In
                    <i className="material-icons right">send</i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
