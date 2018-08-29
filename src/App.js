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
        <a className="brand-logo center flow-text">React Admin</a>
      </div>
    </nav>
  )
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: "",
      employees: [
        {
        firstName: 'Noman',
        lastName: 'Gul',
        email: 'nomangul2001@gmail.com',
        salary: '2000',
        jobStartDate: "20-july-2018"
        },
        {
          firstName: 'Nomi',
          lastName: 'Gul',
          email: 'nomangul2001@gmail.com',
          salary: '2000',
          jobStartDate: "20-july-2018"
        }
      ]
    }
    // console.log(this.state.user)
  }

  // Function For Handling Login
  loginHandler(e) {
    e.preventDefault();
    const [ email, password ] = [ "admin@domain.com", "admin" ];
    const [emailVal, passVal ] = [ this.emailVal.value, this.passVal.value ];
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
  } //Login Handler End

  // employeeCreator(e){
  //   return (
  //     <ul className="collection with-header">
  //       <li className="collection-header center"><h4>{this.state.firstName} {this.state.lastName}</h4></li>
  //       <li className="collection-item"><div>Email: {this.state.email}</div></li>
  //       <li className="collection-item"><div>Salary: {this.state.salary}</div></li>
  //       <li className="collection-item"><div>Job Start Date: {this.state.jobStartDate}</div></li>
  //     </ul>
  //   )
  // }

  addFunc(e) {
    e.preventDefault();
    // console.log("hi");

    this.setState({

    })
  }

  render() {
    const { login, employees } = this.state;
    return (
      <div>
        { !login && <Navbar /> }

        <Dashboard
        firstName={employees.map(employee => employee.firstName)}
        lastName={employees.map(employee => employee.lastName)}
        email={employees.map(employee => employee.email)}
        salary={employees.map(employee => employee.salary)}
        jobStartDate={employees.map(employee => employee.jobStartDate)}
        // employeeCreator={e => this.employeeCreator(e)}
        />

        <Form
        AddFunc= {e => this.addFunc(e)}
        firstNameVal={el => this.firstNameVal = el}
        lastNameVal={el => this.lastNameVal = el}
        formEmailVal={el => this.formEmailVal = el}
        salaryVal={el => this.salaryVal = el}
        jobStartDateVal={el => this.jobStartDateVal = el}
        />
        {/* <Login
          loginHandler={ e => this.loginHandler(e) }
          mainDiv={ el => this.mainDiv = el }
          emailVal={ el => this.emailVal = el }
          passVal={ el => this.passVal = el }
        /> */}
      </div>
    );
  }
}

export default App;
