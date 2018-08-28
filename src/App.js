import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import swal from 'sweetalert';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-2">
        <a href="#" className="brand-logo center">React Admin</a>
      </div>
    </nav>
  )
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: false
    }
    // console.log(this.state.user)
  }

  loginHandler(e) {
    e.preventDefault();
    const [
      email,
      password
    ] = [ "admin@domain.com", "admin" ];

    const [
      emailVal,
      passVal
    ] = [ this.emailVal.value, this.passVal.value ];

    const validation = emailVal === email && passVal === password;
    const swalFunc = () => {
      return swal({
        text: "Wrong Credentials",
        icon: "error",
        buttons: false,
        timer: 2500
      });
    }
    const success = () => {
      this.setState({login: true});
      const hideLogin = this.mainDiv.classList.add('hide');
      return hideLogin;
    }
    return validation ? success() : swalFunc();
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Login mainDiv={el => this.mainDiv = el} loginHandler={e => this.loginHandler(e)} emailVal={el => this.emailVal = el} passVal={el => this.passVal = el} />
      </div>
    );
  }
}

export default App;
