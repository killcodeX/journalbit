import {
  GET_ALL_POST,
  CREATE_NEW_POST,
  GET_ONLY_USER_POST,
  GET_LIKE_UNLIKE_POST,
  GET_COMMENT_POST, 
  GET_DELETE_POST
} from "./actionconstant";

import {
  allPost,
  newPostPublish,
  getOnlySubPost,
  onlyUserPost,
  likePost,
  unlikePost,
  commentPost,
  deletePost
} from "../../api/postapi";

export const getallPost = () => async (dispatch) => {
  const result = await getOnlySubPost();
  try {
    dispatch({
      type: GET_ALL_POST,
      post: result.result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getnewPost = (body) => async (dispatch) => {
  const result = await newPostPublish(body);
  try {
    dispatch({
      type: CREATE_NEW_POST,
      post: result.result[0],
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOnlyUserPost = (id) => async (dispatch) => {
  const result = await onlyUserPost(id);
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
  await deletePost(id);
  try {
    dispatch({
      type: GET_DELETE_POST,
      postId: id,
    });
  } catch (error) {
    console.log(error);
  }
};