import {combineReducers} from 'redux';
import AuthReducer from './authreducers';
import PostReducer from './postreducers';



export default combineReducers({
    auth: AuthReducer,
    post: PostReducer
})