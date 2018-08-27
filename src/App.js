import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'

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
  constructor(){
    super();

  }

  // loginHandler(){
  //   this.setState({login: true})
  // }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Login />
      </div>
    );
  }
}

export default App;
