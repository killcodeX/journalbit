import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_LOCAL_STORAGE,
} from "../actions/actionconstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  isLoggingIn: false,
  isSignUp: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  SignUpError: false,
  logoutError: false,
  isAuthenticated: false,
  errorMessage: "",
  user: {},
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case LOGIN_SUCCESS:
      saveState("firebaseLoggedIn", true);
      saveState("firebaseUser", action.user);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      alert(action.message);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        errorMessage: action.message,
      };

    case SIGNUP_SUCCESS:
      saveState("firebaseLoggedIn", true);
      saveState("firebaseUser", action.user);
      return {
        ...state,
        isSignUp: false,
        isAuthenticated: true,
        user: action.user,
      };
    case SIGNUP_FAILURE:
      alert(action.message);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        SignUpError: true,
        errorMessage: action.message,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        loginError: false,
      };
    case LOGOUT_SUCCESS:
      saveState("firebaseLoggedIn", false);
      saveState("firebaseUser", {});
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
      };
    case LOGOUT_FAILURE:
      alert(action.message);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        errorMessage: action.message,
      };

    case VERIFY_LOCAL_STORAGE:
      const auth = loadState("journalbitLoggedIn");
      const user = loadState("journalUser");
      console.log(auth, user);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: auth,
        loginError: true,
        user: user,
      };

    default:
      return state;
  }
};

export default AuthReducer;
