import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from './types';

export const addEmployee = (employee) => ({
    type: ADD_EMPLOYEE,
    payload: employee
});
export const deleteEmployee = (employeeId) => ({
    type: DELETE_EMPLOYEE,
    payload: {
        employeeId
    }
});


/*export default {
    addEmployee,
    deleteEmployee
}*/