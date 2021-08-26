import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  VERIFY_LOCAL_STORAGE,
  UPDATE_USER,
  GET_USER_PROFILE, 
  GET_USER_FOLLOWER, 
  GET_USER_UNFOLLOWER
} from "./actionconstant";

import { userRegister, userLogin, userUpdate, getUser, getfollowerUser } from "../../api/index";

export const receiveLogin = (user, history) => async (dispatch) => {
  const result = await userLogin(user);
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      user: result.result,
      token: result.token,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const receiveSignUp = (user, history) => async (dispatch) => {
  const result = await userRegister(user);
  try {
    dispatch({
      type: SIGNUP_SUCCESS,
      user: result.result,
      token: result.token,
    });
    history.push("/account-setting");
  } catch (error) {
    console.log(error);
  }
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};


export const receiveUpdate = (body, history) => async (dispatch) => {
  const result = await userUpdate(body);
  try {
    dispatch({
      type: UPDATE_USER,
      user: result.result,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};


export const getUserdata = (id) => async (dispatch) => {
  const result = await getUser(id);
  try {
    dispatch({
      type: GET_USER_PROFILE,
      user: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserfollower = (id) => async (dispatch) => {
  const result = await getfollowerUser(id);
  console.log(result)
  // try {
  //   dispatch({
  //     type: GET_USER_FOLLOWER,
  //     user: result.result,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};