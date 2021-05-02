import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import EmployeeAdd from './EmployeeAdd';
import EmployeeEdit from './EmployeeEdit';
import EmployeeFilter from './EmployeeFilter';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route component={EmployeeEdit} path='/edit' />
                <Route component={EmployeeFilter} path='/filter' />
                <Route component={EmployeeAdd} path='/add' />
                <Route component={ Home} exact path ='/'/>
            </BrowserRouter>
        )
    }
}

export default Routes;