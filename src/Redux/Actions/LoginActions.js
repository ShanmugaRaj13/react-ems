import { message } from "antd";
import axios from "axios";


export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";


const API_URL = "http://localhost:8080/auth/login";

export const LoginUser = (data) =>{
    return(dispatch)=>{
        dispatch({type:FETCH_LOGIN_REQUEST})

        axios.post(API_URL,data)
            .then(res =>{
                //set data in local storage
                localStorage.setItem("user", JSON.stringify(res.data));

                dispatch({type:FETCH_LOGIN_SUCCESS, payload:res.data});
                console.log("User Login Success",res.data)
                message.success("Login Success");
            })
            .catch(err =>{
                dispatch({type:FETCH_LOGIN_FAILURE, payload:err.message});
                console.log(err.response.data);
                message.error(err.response.data);
            })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT_SUCCESS" });
        localStorage.removeItem("user");
        message.success("Logged Out");
    };
};

