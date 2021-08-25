import {
  GET_ALL_POST,
  GET_ONLY_USER_POST,
  GET_LIKE_UNLIKE_POST,
  GET_COMMENT_POST
} from "./actionconstant";

import {
  allPost,
  onlyUserPost,
  likePost,
  unlikePost,
  commentPost,
  deletePost
} from "../../api/postapi";

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


export const getcommentPost = (body) => async (dispatch) => {
  const result = await commentPost(body);
  try {
    dispatch({
      type: GET_COMMENT_POST,
      post: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getdeletePost = (id) => async (dispatch) => {
  const result = await deletePost(id);
  // try {
  //   dispatch({
  //     type: GET_COMMENT_POST,
  //     post: result.result,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};