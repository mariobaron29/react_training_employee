import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeItem from './EmployeeItem';
import { connect } from "react-redux";
import { deleteEmployee } from './data/actions/employee';

  class Home extends Component {
      componentWillMount() {
        
      }

      removeEmployee = (employee) => {
          this.props.reduxDeleteEmployee(employee.id);
      }
      
      editEmployee = (employee) => {
        <Link to={{ pathname: '/edit'}}>Edit</Link>
     }

      render(){
          return (
              <div style={{ margin: '10px' }}>
                  <Link to={{ pathname: '/add', state: this.state }}>Add</Link>
                  <Link to={{ pathname: '/filter', state: this.state }}>Search</Link>
            <ol className = 'employees-list'>
                      {
                          this.props.employees.map(employee => (
                              <EmployeeItem key={employee.id} employee={employee} onDeleteEmployee={this.removeEmployee} onEditEmployee={ this.editEmployee}/>
                              
                      ))}
            </ol>
          </div>
          )
      }
};

const mapStateToProps = (reduxState) => {
    return {
        employees: reduxState.data,
    };
 };

const mapDispatchToProps = (dispatch) => {
    return {
        reduxDeleteEmployee: (id) => dispatch(deleteEmployee(id))
    };
};

  export default connect(mapStateToProps, mapDispatchToProps)(Home)