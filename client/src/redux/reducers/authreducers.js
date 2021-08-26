import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  UPDATE_USER,
  GET_USER_PROFILE,
} from "../actions/actionconstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  isAuthenticated: false,
  token: "",
  user: {},
  userProfile: {},
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
    case GET_USER_PROFILE:
      console.log("called");
      saveState("journalUserProfile", action.user);
      return {
        ...state,
        userProfile: action.user,
      };
    case LOGOUT_SUCCESS:
      saveState("journalLoggedIn", false);
      saveState("journalUser", {});
      saveState("journaltoken", "");
      saveState("journalUserProfile", {});
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: "",
        userProfile: {},
      };

    case VERIFY_LOCAL_STORAGE:
      const auth = loadState("journalLoggedIn");
      const user = loadState("journalUser");
      const token = loadState("journaltoken");
      const userP = loadState("journalUserProfile");
      console.log(auth, user);
      return {
        ...state,
        isAuthenticated: auth,
        user: user,
        token: token,
        userProfile: userP,
      };

    default:
      return state;
  }
};

export default AuthReducer;
