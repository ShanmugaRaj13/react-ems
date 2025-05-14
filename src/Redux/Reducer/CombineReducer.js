import {combineReducers} from 'redux';
import employeeReducer from './EmployeeReducer';
import loginReducer from './LoginReducer';

//FOR ONE OR MORE REDUCER
const rootReducer = combineReducers({
    employees : employeeReducer,
    login : loginReducer,
})

export default rootReducer;