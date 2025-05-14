import {
    FETCH_EMP_REQUEST,FETCH_EMP_SUCCESS,FETCH_EMP_FAILURE,
    ADD_EMP_REQUEST,
    ADD_EMP_SUCCESS,
    ADD_EMP_FAILURE,
    DELETE_EMP_REQUEST,
    DELETE_EMP_SUCCESS,
    UPDATE_EMP_REQUEST,
    UPDATE_EMP_FAILURE,
    DELETE_EMP_FAILURE,
    UPDATE_EMP_SUCCESS
} from '../Actions/EmployeeAction.js';

//TO SET INITIAL STATE TO REDUCER
const initialState = {
    employees : [],
    error : ''
};

const employeeReducer = (state=initialState, action) => {

    switch(action.type){

        case FETCH_EMP_REQUEST:
        case ADD_EMP_REQUEST:
        case DELETE_EMP_REQUEST:
        case UPDATE_EMP_REQUEST:
            return {...state, loading:true};

        case FETCH_EMP_SUCCESS:
            return {employees:action.payload, error:'',}; //ADD EMP TO STATE
        
        case ADD_EMP_SUCCESS:
            return {employees:[...state.employees,action.payload], error:''}//ADD NEW EMP TO STATE

        case UPDATE_EMP_SUCCESS:
            return { employees: state.employees.map(emp => 
                emp.id === action.payload.id ? action.payload : emp
            ), error:''}//UPDATE THR EMP IN STATE
        
        case DELETE_EMP_SUCCESS:
            return { employees: state.employees.filter(emp =>
                emp.id !== action.payload
            )}//REMOVE THE EMP FROM STATE

        case FETCH_EMP_FAILURE:
        case ADD_EMP_FAILURE:
        case UPDATE_EMP_FAILURE:
        case DELETE_EMP_FAILURE:
            return {...state, error:action.payload};

        default:
            return state;
    }
    
}

export default employeeReducer;