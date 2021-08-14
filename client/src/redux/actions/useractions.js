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
} from "./actionconstant";

import { userRegister, userLogin } from "../../api/index";

// for login
export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};

export const receiveLogin = (user) => async (dispatch) => {
  const result = await userLogin(user);
  console.log(result)
  // dispatch({
  //   type: LOGIN_SUCCESS,
  //   user,
  // })
};

const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    message,
  };
};

export const receiveSignUp = (user) => async (dispatch) => {
  const result = await userRegister(user);
  console.log(result)
  // dispatch({
  //   type: SIGNUP_SUCCESS,
  //   result,
  // });
};

const signUpError = (message) => {
  return {
    type: SIGNUP_FAILURE,
    message,
  };
};

//  for log out
const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutError = (message) => {
  return {
    type: LOGOUT_FAILURE,
    message,
  };
};

// for verify

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};
