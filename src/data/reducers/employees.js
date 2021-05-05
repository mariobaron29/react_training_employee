import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from '../actions/types'

/*
{
  type: ADD_EMPLOYEE,
  payload: employee
}
*/

const initalState = {
  loadedData: false,
  isError: false,
  data: []
}

export default function(state = initalState, { type, payload }) {
  switch (type) {
    case ADD_EMPLOYEE: {
      const newEmployeeId = state.data.reduce((currentMaxId, { id }) => Math.max(currentMaxId, id), 0) + 1;
      return {
        ...state,
        data: [ ...state.data, { ...payload, id: newEmployeeId } ]
      }
    } case DELETE_EMPLOYEE: {
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload.employeeId )
      };
    }
    default:
      return state;
  }
}