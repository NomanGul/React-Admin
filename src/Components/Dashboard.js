import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Dashboard extends Component {

  // emp = () => this.props.employeeCreator()

  render() {
    return (
      <div>
        <div className="container">
        <h1 className="center">Employees</h1>
          {/* {this.employeeCreator()} */}
          {/* {this.emp()} */}
          {this.props.employeeCreator}
          {/* {this.props.employeeCreator} */}
        </div>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large teal modal-trigger" href="#modal1">
            <i className="large material-icons">add</i>
          </a>
          {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
