import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEmployee } from './data/actions/employee';


class EmployeeAdd extends Component {
  componentWillMount(){
    this.setState({
      //...this.props.location.state, 
      redirect: false
    })
    //console.log(this.props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let employee = {
      name: event.target.name.value,
      position: event.target.position.value,
      salary: event.target.salary.value
    };
    this.props.dispatch(addEmployee(employee));
    this.setState({redirect:true});
  }

    render(){
      const { redirect } = this.state;
        return ( 
           redirect ? ( <Redirect to={{pathname:'/', }} />) : (
          <form onSubmit={this.handleSubmit} className='create-employee-form' >
              <input type="text" placeholder="Name" name="name" className='create-employee-details'/> 
              <input type="text" placeholder="Positon" name="position" className='create-employee-details'/> 
              <input type="text" placeholder="Salary" name="salary" className='create-employee-details'/>
              <input type="submit" value="Save" />
          </form>)
        );
      }
    }



export default connect()(EmployeeAdd)