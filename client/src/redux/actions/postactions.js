import { GET_ONLY_USER_POST } from "./actionconstant";

import { onlyUserPost } from "../../api/postapi";

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
