import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EmployeeEdit extends Component {
  componentWillMount(){
    this.setState({
        ...this.props.location.state, redirect: true 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let employee = {
      id: this.state.nextId,
      name: event.target.name.value,
      position: event.target.position.value,
      salary: event.target.salary.value
    };
    this.setState({
      employees: this.state.employees.concat(employee), nextId: this.state.nextId + 1, redirect:true});
  }

    render(){
      const { redirect } = this.state
        return ( 
           redirect ? ( <Redirect to={{pathname:'/', state:this.state}} />) : (
          <form onSubmit={this.handleSubmit} className='create-employee-form' >
              <input type="text" placeholder="Name" name="name" className='create-employee-details'/> 
              <input type="text" placeholder="Positon" name="position" className='create-employee-details'/> 
              <input type="text" placeholder="Salary" name="salary" className='create-employee-details'/>
              <input type="submit" value="Save" />
          </form>)
        );
      }
    }

export default EmployeeEdit