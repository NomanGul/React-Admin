import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import swal from 'sweetalert';

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-2">
        <a className="brand-logo center flow-text">ReactAdmin</a>
        <a onClick={props.logoutHandler} className="btn-floating btn-large halfway-fab waves-effect waves-light red">
          <i className="material-icons">power_settings_new</i>
        </a>
      </div>
    </nav>
  )
}

// Employees Object / Renders Employees List
// const employees = [
//   {
//     index: '0',
//     firstName: 'Noman',
//     lastName: 'Gul',
//     email: 'nomangul2001@gmail.com',
//     salary: '2000',
//     jobStartDate: "2018-07-20"
//   },
//   {
//     index: '1',
//     firstName: 'Nomi',
//     lastName: 'Gul',
//     email: 'nomangul2001@gmail.com',
//     salary: '2000',
//     jobStartDate: "2018-07-21"
//   }
// ];

let newEmployees = [];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      employeesObj: [...newEmployees]
    }
  }

  // Function For Handling Login
  loginHandler(e) {
    e.preventDefault();
    const [email, password] = ["admin@domain.com", "admin"];
    const [emailVal, passVal] = [this.emailVal.value, this.passVal.value];
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
      this.setState({ login: true });
      const hideLogin = this.loginCard.classList.add('hide');
      return hideLogin;
    }
    return validation ? success() : swalFunc();
  } //Login Handler End

  logoutHandler() {
    return this.setState({ login: "" });
  }

  employeeCreator = () => {
    const { employeesObj } = this.state;
    return (employeesObj.map((employee, index) => {
      return (
        <ul className="collection with-header hoverable z-depth-2" key={index}>
          <li className="collection-header teal white-text">
            <h4 className="center">{employee.firstName} {employee.lastName}</h4> {/*onClick={() => this.editFunc(index)}*/}
            <a href="#modal2" className="btn-floating waves-effect waves-light red right modal-trigger">
              <i className="material-icons">edit</i>
            </a>
            <a onClick={() => this.deleteFunc(index)} className="btn-floating waves-effect waves-light red right">
              <i className="material-icons">delete</i>
            </a>
          </li>
          <li className="collection-item">
            <span><b>Email:</b> {employee.email}</span>
          </li>
          <li className="collection-item">
            <span><b>Salary:</b> $ {employee.salary}</span>
          </li>
          <li className="collection-item">
            <span><b>Job Start Date:</b> {employee.jobStartDate}</span>
          </li>
        </ul>
      )
    }))
  }

  addFunc() {
    let firstName = this.firstNameVal.value,
      lastName = this.lastNameVal.value,
      email = this.formEmailVal.value,
      salary = this.salaryVal.value,
      jobStartDate = this.jobStartDateVal.value;
    let newEmployeeObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      salary: salary,
      jobStartDate: jobStartDate
    }
    newEmployees.push(newEmployeeObj);
    this.setState({
      employeesObj: [...newEmployees]
    });
    return (
      this.firstNameVal.value = "",
      this.lastNameVal.value = "",
      this.formEmailVal.value = "",
      this.salaryVal.value = "",
      this.jobStartDateVal.value = ""
    )
    // return newEmployeeObj = {}
    // console.log("=>", newEmployeeObj)
  }

  cancelFunc() {
    // e.preventDefault();
    this.firstNameVal.value = "";
    this.lastNameVal.value = "";
    this.formEmailVal.value = "";
    this.salaryVal.value = "";
    this.jobStartDateVal.value = "";
  }

  deleteFunc(index){
    const { employeesObj } = this.state;
    employeesObj.splice(index, 1);
    newEmployees.splice(index, 1);
    this.setState({ employeesObj });
  }

  // editFunc(index) {
  //   const { employeesObj } = this.state;

  //   console.log(employeesObj[index].firstName)
  //   this.editfirstNameVal.value = employeesObj[index].firstName.value;
  //   this.editlastNameVal.value = employeesObj[index].lastName;
  //   this.editformEmailVal.value = employeesObj[index].email;
  //   this.editsalaryVal.value = employeesObj[index].salary;
  //   this.editjobStartDateVal.value = employeesObj[index].jobStartDate;
  //   // let editEmployeeObj = {
  //   //   firstName: firstName,
  //   //   lastName: lastName,
  //   //   email: email,
  //   //   salary: salary,
  //   //   jobStartDate: jobStartDate
  //   // }
  //   // newEmployees.push(editEmployeeObj);
  //   // this.setState({
  //   //   employeesObj: [...newEmployees]
  //   // });
  // }

  render() {
    const { login } = this.state;
    return (
      <div>

        {!login && <Login
          loginHandler={ e => this.loginHandler(e) }
          loginCard={ el => this.loginCard = el }
          emailVal={ el => this.emailVal = el }
          passVal={ el => this.passVal = el }
        />}

        {login && <Navbar logoutHandler={() => this.logoutHandler()} />}

        {login && <Dashboard employeeCreator={this.employeeCreator()} />}
        {/* <Navbar logoutHandler={() => this.logoutHandler()} />
        <Dashboard employeeCreator={this.employeeCreator()} /> */}
        <Form
          addFunc={() => this.addFunc()}
          cancelFunc={() => this.cancelFunc()}
          // editFunc={() => this.editFunc()}
          firstNameVal={el => this.firstNameVal = el}
          lastNameVal={el => this.lastNameVal = el}
          formEmailVal={el => this.formEmailVal = el}
          salaryVal={el => this.salaryVal = el}
          jobStartDateVal={el => this.jobStartDateVal = el}
          // editfirstNameVal={el => this.editfirstNameVal = el}
          // editlastNameVal={el => this.editlastNameVal = el}
          // editformEmailVal={el => this.editformEmailVal = el}
          // editsalaryVal={el => this.editsalaryVal = el}
          // editjobStartDateVal={el => this.editjobStartDateVal = el}
        />

      </div>
    );
  }
}

export default App;
