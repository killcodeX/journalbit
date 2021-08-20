import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  UPDATE_USER,
} from "../actions/actionconstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  isAuthenticated: false,
  token: "",
  user: {},
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveState("journalLoggedIn", true);
      saveState("journalUser", action.user);
      saveState("journaltoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };

    case SIGNUP_SUCCESS:
      saveState("journalLoggedIn", true);
      saveState("journalUser", action.user);
      saveState("journaltoken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token,
      };
    case UPDATE_USER:
      saveState("journalUser", action.user);
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT_SUCCESS:
      saveState("journalLoggedIn", false);
      saveState("journalUser", {});
      saveState("journaltoken", "");
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: "",
      };

    case VERIFY_LOCAL_STORAGE:
      const auth = loadState("journalLoggedIn");
      const user = loadState("journalUser");
      const token = loadState("journaltoken");
      console.log(auth, user);
      return {
        ...state,
        isAuthenticated: auth,
        user: user,
        token: token,
      };

    default:
      return state;
  }
};

export default AuthReducer;
