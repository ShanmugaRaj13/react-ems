import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "../Actions/LoginActions";


const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return { ...state, loading: true, error: null };

        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
            

        case FETCH_LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case "LOGOUT_SUCCESS":
            return { ...state, user: null, isAuthenticated: false, error: null };

        default:
            return state;
    }
};

export default loginReducer;
