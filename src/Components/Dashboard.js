import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Dashboard extends Component {
  employeeCreator(){
    const firstName = this.props.firstName.map(val => val);
    const lastName = this.props.lastName.map(val => val);
    const email = this.props.email.map(val => val);
    const salary = this.props.salary.map(val => val);
    const jobStartDate = this.props.jobStartDate.map(val => val);
// const allEl = firstName, lastName, email, salary, jobStartDate;
// console.log(firstName);
    // return(
    //   <ul className="collection with-header">
    //     <li className="collection-header center"><h4>{this.props.firstName} {this.props.lastName}</h4></li>
    //     <li className="collection-item"><div>Email: {this.props.email}</div></li>
    //     <li className="collection-item"><div>Salary: {this.props.salary}</div></li>
    //     <li className="collection-item"><div>Job Start Date: {this.props.jobStartDate}</div></li>
    //   </ul>
    // )
    // return(
    //   allEl.map(el => {
    //     return <ul className="collection with-header">
    //       <li className="collection-header center"><h4>{el.firstName} {el.lastName}</h4></li>
    //       <li className="collection-item"><div>Email: {el.email}</div></li>
    //       <li className="collection-item"><div>Salary: {el.salary}</div></li>
    //       <li className="collection-item"><div>Job Start Date: {el.jobStartDate}</div></li>
    //     </ul>
    //   })
    // )
    // {/* {this.props.map()} */}
    // return(this.props.map(prop => newprop => {
    //   return(
    //     <ul className="collection with-header">
    //       <li className="collection-header center"><h4>{prop.newprop.firstName} {prop.newprop.lastName}</h4></li>
    //       <li className="collection-item"><div>Email: {prop.newprop.email}</div></li>
    //       <li className="collection-item"><div>Salary: {prop.newprop.salary}</div></li>
    //       <li className="collection-item"><div>Job Start Date: {prop.newprop.jobStartDate}</div></li>
    //     </ul>
    //   )
    // }))
  }
  render() {

    return (
      <div>
        <div className="container">
        <h1 className="center">Employees</h1>
          {this.employeeCreator()}
          {/* {this.props.employeeCreator} */}
        </div>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red modal-trigger" href="#modal1">
            <i className="large material-icons">add</i>
          </a>
          {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
