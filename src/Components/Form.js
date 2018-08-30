import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Form extends Component {
  render() {
    return (
      <div>


        {/* <!-- Add Employee Modal Structure --> */}
        <div id="modal1" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4 className='center'>New Employee</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input ref={this.props.firstNameVal} id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input ref={this.props.lastNameVal} id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input ref={this.props.formEmailVal} id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input ref={this.props.salaryVal} id="salary" type="number" className="validate" />
                    <label htmlFor="salary">Salary</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    Job Start Date:
                    <div className="input-field">
                      <input ref={this.props.jobStartDateVal} id="date" type="date" className="validate" />
                      <label htmlFor="date"></label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={this.props.addFunc} className="modal-action modal-close waves-effect waves-green btn-flat">Add</button>
            <button onClick={this.props.cancelFunc} className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</button>
          </div>
        </div>

      {/* <!-- Edit Employee Modal Structure --> */}
        {/* <div id="modal2" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4 className='center'>Edit Employee</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input ref={this.props.editFirstNameVal} id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input ref={this.props.editlastNameVal} id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input ref={this.props.editformEmailVal} id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input ref={this.props.editsalaryVal} id="salary" type="number" className="validate" />
                    <label htmlFor="salary">Salary</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    Job Start Date:
                    <div className="input-field">
                      <input ref={this.props.editjobStartDateVal} id="date" type="date" className="validate" />
                      <label htmlFor="date"></label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={this.props.addFunc} className="modal-action modal-close waves-effect waves-green btn-flat">Add</button>
            <button onClick={this.props.cancelFunc} className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Form;
