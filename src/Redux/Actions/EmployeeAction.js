import axios from "axios";
import { message } from 'antd';

//Action Types

//FETCH
export const FETCH_EMP_REQUEST = 'FETCH_EMP_REQUEST';
export const FETCH_EMP_SUCCESS = 'FETCH_EMP_SUCCESS';
export const FETCH_EMP_FAILURE = 'FETCH_EMP_FAILURE';
//ADD
export const ADD_EMP_REQUEST = 'ADD_EMP_REQUEST';
export const ADD_EMP_SUCCESS = 'ADD_EMP_SUCCESS';
export const ADD_EMP_FAILURE = 'ADD_EMP_FAILURE';
//UPDATE
export const UPDATE_EMP_REQUEST = 'UPDATE_EMP_REQUEST';
export const UPDATE_EMP_SUCCESS = 'UPDATE_EMP_SUCCESS';
export const UPDATE_EMP_FAILURE = 'UPDATE_EMP_FAILURE';
//DELETE
export const DELETE_EMP_REQUEST = 'DELETE_EMP_REQUEST';
export const DELETE_EMP_SUCCESS = 'DELETE_EMP_SUCCESS';
export const DELETE_EMP_FAILURE = 'DELETE_EMP_FAILURE';

//Base URL
const API_URL = 'http://localhost:8080/employees';

//Action Creater for fetch data
export const FetchEmployee = () => {
    return(dispatch) => {
        dispatch({type:FETCH_EMP_REQUEST})

        axios.get(API_URL)
            .then(response => {
                dispatch({ type:FETCH_EMP_SUCCESS, payload:response.data })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                dispatch({ type:FETCH_EMP_FAILURE, payload:error.response.data })
            })     
    }
}

//Action Creater for add emp
export const AddEmployee = (newEmployee) => {
    return(dispatch) => {
        dispatch({ type:ADD_EMP_REQUEST })

        axios.post(`${API_URL}`,newEmployee)
            .then(response =>{
                dispatch({ type:ADD_EMP_SUCCESS, payload:response.data })
                message.success("New Employee Added");
            })
            .catch(error =>{
                dispatch({ type:ADD_EMP_FAILURE, payload:error.response.data })
                message.error(error.response.data);
                
            })
    }
}

//Action Creater for update Employee
export const UpdateEmployee = (EmployeId,UpdatedEmployee) =>{
    return(dispatch) => {
        dispatch({ type:UPDATE_EMP_REQUEST })
        axios.put(`${API_URL}/${EmployeId}`,UpdatedEmployee)
            .then(response => {
                dispatch({ type:UPDATE_EMP_SUCCESS, payload:response.data })
                message.success('Employee Details Updated');
            })
            .catch(error =>{
                dispatch({ type:UPDATE_EMP_FAILURE, payload:error.response.data })
                message.error(error.response.data);
            })
    }
}

//Action Creater for Delete Employee
export const DeleteEmployee = (EmployeId) => {
    return(dispatch) => {
        dispatch({ type:DELETE_EMP_REQUEST })
        axios.delete(`${API_URL}/${EmployeId}`)
            .then(response => {
                dispatch({ type:DELETE_EMP_SUCCESS, payload:EmployeId })
                message.success('Employee Data Deleted')
            })
            .catch(error =>{
                dispatch({ type:DELETE_EMP_FAILURE, payload:error.response.data })                
                message.error(error.response.data);
            })
    }
}