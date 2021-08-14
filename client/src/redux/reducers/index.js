import {combineReducers} from 'redux';
import AuthReducer from './authreducers';
//import AuthReducer from './authReducer';



export default combineReducers({
    auth: AuthReducer,
    //Auth: AuthReducer
})