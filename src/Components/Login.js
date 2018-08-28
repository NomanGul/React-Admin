import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Login extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     login: false
  //   }
  //   // console.log(this.state.user)
  // }

  // loginHandler(e) {
  //   e.preventDefault();
  //   const [
  //     email,
  //     password
  //   ] = [ "admin@domain.com", "admin" ];

  //   const [
  //     emailVal,
  //     passVal
  //   ] = [ this.emailVal.value, this.passVal.value ];

  //   const validation = emailVal === email && passVal === password;
  //   const swalFunc = () => {
  //     return swal({
  //       text: "Wrong Credentials",
  //       icon: "error",
  //       buttons: false,
  //       timer: 2500
  //     });
  //   }
  //   const success = () => {
  //     this.setState({login: true});
  //     const hideLogin = this.mainDiv.classList.add('hide');
  //     return hideLogin;
  //   }
  //   return validation ? success() : swalFunc();
  // }

  render() {
    // console.log(this.state.user)
    return (
      <div className="loginMainDiv" ref={this.props.mainDiv}>
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
                      <input ref={this.props.emailVal} id="email" type="email" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <input ref={this.props.passVal} id="password" type="password" />
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
