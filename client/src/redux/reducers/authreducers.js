import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_LOCAL_STORAGE,
} from "../actions/actionconstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  isVerifying: false,
  loginError: false,
  signUpError: false,
  logoutError: false,
  isAuthenticated: false,
  errorMessage: "",
  token: {},
  user: {},
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveState("journalLoggedIn", true);
      saveState("journalUser", action.user);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
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
      saveState("journalLoggedIn", true);
      saveState("journalUser", action.user);
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
    case LOGOUT_SUCCESS:
      saveState("journalLoggedIn", false);
      saveState("journalUser", {});
      return {
        ...state,
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
      const auth = loadState("journalLoggedIn");
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
