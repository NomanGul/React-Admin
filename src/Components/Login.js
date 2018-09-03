import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.css";

class Login extends Component {
  render() {
    return (
      <div className="loginMainDiv" ref={this.props.loginCard}>
        <div className="card z-depth-5">
          <div className="card-content blue darken-2 white-text">
            <p className="flow-text center-align">Log In</p>
          </div>
          <div className="card-content">
            <div id="login">
              <div className="row">
                <form onSubmit={this.props.loginHandler} className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input
                        ref={this.props.emailVal}
                        id="loginEmail"
                        type="email"
                      />
                      <label htmlFor="loginEmail">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <input
                        ref={this.props.passVal}
                        id="password"
                        type="password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn waves-effect waves-light pink right"
                  >
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
