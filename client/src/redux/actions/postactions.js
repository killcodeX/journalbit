import { GET_ALL_POST, GET_ONLY_USER_POST, GET_LIKE_UNLIKE_POST } from "./actionconstant";

import { allPost, onlyUserPost, likePost, unlikePost } from "../../api/postapi";

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

export const getlikePost = (id) => async (dispatch) => {
  const result = await likePost(id);
  console.log(result);
  try {
    dispatch({
      type: GET_LIKE_UNLIKE_POST,
      post: result.result,
      act:'update'
    });
  } catch (error) {
    console.log(error);
  }
};

export const getunlikePost = (id) => async (dispatch) => {
  const result = await unlikePost(id);
  console.log(result);
  try {
    dispatch({
      type: GET_LIKE_UNLIKE_POST,
      post: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};
