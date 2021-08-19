import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  VERIFY_LOCAL_STORAGE,
} from "./actionconstant";

import { userRegister, userLogin } from "../../api/index";

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
