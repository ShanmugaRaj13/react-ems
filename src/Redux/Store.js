import { createStore , applyMiddleware, compose } from "redux";
import {thunk} from 'redux-thunk';
import rootReducer from "./Reducer/CombineReducer";

//FOR DEVTOOLS
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//TO CREATE A STORE FOR REDUX
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),//FOR AXIOS METHOD
);


