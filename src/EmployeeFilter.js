import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmployeeItem from './EmployeeItem'

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
  
class EmployeeFilter extends Component {
  componentWillMount() {
    let newState = this.props.location.state ? this.props.location.state : initialState
    this.setState(() => ({
        ...newState 
    })
      )
}

  filterByName = (event) => {
    event.preventDefault();
    const name = event.target.value;
    console.log(this.state);
    this.setState({
      employees: (name)?this.state.employees.filter((c) => c.name.indexOf(name) > -1 ):initialState.employees,redirect: true
    });
    console.log(this.state.employees)
  }

  filterByPosition = (event) => {
    event.preventDefault();
    const position = event.target.value;
    console.log(this.state);
    this.setState({
      employees: (position)?this.state.employees.filter((c) => c.position.indexOf(position) > -1 ):initialState.employees,redirect: true
    });
    console.log(this.state.employees)
  }

  filterBySalary = (event) => {
    event.preventDefault();
    const salary = event.target.value;
    console.log(this.state);
    this.setState({
      employees: (salary)?this.state.employees.filter((c) => c.salary == salary):initialState.employees,redirect: true
    });
    console.log(this.state.employees)
  }

  render(){
    const { redirect } = this.state
      return ( 
          
        <form   >
            <input type="text" placeholder="Name" name="name" className='create-employee-details' onChange={ this.filterByName}/>
            <input type="text" placeholder="Positon" name="position" className='create-employee-details' onChange={ this.filterByPosition}/> 
            <input type="text" placeholder="Salary" name="salary" className='create-employee-details' onChange={ this.filterBySalary}/>

            
              <ol className = 'employees-list'>
                {
                    this.state.employees.map(employee => (
                        <EmployeeItem key={ employee.id } employee={employee}/>
                ))}
              </ol>
            
        </form>
        
        
      );
    }
    }

export default EmployeeFilter