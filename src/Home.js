import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeItem from './EmployeeItem';


const initialState = {
    employees:[
        {
            "id": 1,
            "name": "Mario Patch Mod",
            "position": "dev patch",
            "salary": 65000
        },
        {
            "name": "Mario Patch",
            "salary": 6000,
            "position": "dev",
            "id": 2
        },
        {
            "name": "Mario Post",
            "salary": 55000,
            "position": "Sr dev",
            "id": 3
        }
    ],
    nextId: 4
    }

  export default class Home extends Component {
      componentWillMount() {
          let newState = this.props.location.state ? this.props.location.state : initialState
          this.setState(() => ({
              ...newState 
          })
            )
      }

      removeEmployee = (employee) => {
          this.setState((state) => ({
            employees: state.employees.filter((c) => c.id !== employee.id)
          }))
      }
      
      editEmployee = (employee) => {
        <Link to={{ pathname: '/edit', state: this.state }}>Edit</Link>
     }

      render(){
          return (
              <div style={{ margin: '10px' }}>
                  <Link to={{ pathname: '/add', state: this.state }}>Add</Link>
                  <Link to={{ pathname: '/filter', state: this.state }}>Search</Link>
            <ol className = 'employees-list'>
                      {
                          this.state.employees.map(employee => (
                              <EmployeeItem key={employee.id} employee={employee} onDeleteEmployee={this.removeEmployee} onEditEmployee={ this.editEmployee}/>
                              
                      ))}
            </ol>
          </div>
          );
      }
  }