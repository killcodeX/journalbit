import { GET_ALL_POST, GET_ONLY_USER_POST } from "./actionconstant";

import { allPost, onlyUserPost, } from "../../api/postapi";

export const getallPost = () => async (dispatch) => {
  const result = await allPost();
  try {
    dispatch({
      type: GET_ALL_POST,
      post: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOnlyUserPost = () => async (dispatch) => {
  const result = await onlyUserPost();
  try {
    dispatch({
      type: GET_ONLY_USER_POST,
      post: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};