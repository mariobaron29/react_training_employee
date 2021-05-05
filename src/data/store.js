import { createStore } from 'redux';
import employees from './reducers/employees';


export default createStore(employees);