import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  UPDATE_USER,
  GET_USER_PROFILE,
  GET_USER_FOLLOWER,
  GET_USER_UNFOLLOWER,
  GET_All_USER,
  DELETE_USER,
} from "../actions/actionconstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  isAuthenticated: loadState("journalLoggedIn") || false,
  token: "",
  user: {},
  userProfile: {},
  allUser: [],
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
      saveState("journalUserProfile", action.user);
      return {
        ...state,
        userProfile: action.user,
      };
    case GET_USER_FOLLOWER:
      saveState("journalUserProfile", action.followUser);
      saveState("journalUser", action.loggedUser);
      const newAlluser = [...state.allUser];
      const postIndex = newAlluser.findIndex(
        (user) => user._id == action.followUser._id
      );
      newAlluser[postIndex] = {
        ...newAlluser[postIndex],
        followers: action.followUser.followers,
      };
      return {
        ...state,
        userProfile: action.followUser,
        user: action.loggedUser,
        allUser: newAlluser,
      };
    case GET_USER_UNFOLLOWER:
      saveState("journalUserProfile", action.followUser);
      saveState("journalUser", action.loggedUser);
      const allusers = [...state.allUser];
      const unfollowIndex = allusers.findIndex(
        (user) => user._id == action.followUser._id
      );
      allusers[unfollowIndex] = {
        ...allusers[unfollowIndex],
        followers: action.followUser.followers,
      };
      return {
        ...state,
        userProfile: action.followUser,
        user: action.loggedUser,
        allUser: allusers,
      };
    case GET_All_USER:
      return {
        ...state,
        allUser: action.allUser,
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

    case DELETE_USER:
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
