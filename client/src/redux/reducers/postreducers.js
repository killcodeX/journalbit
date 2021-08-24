import {
  GET_ALL_POST,
  GET_ONLY_USER_POST,
  GET_LIKE_UNLIKE_POST,
} from "../actions/actionconstant";

const initialState = {
  allPost: [],
  userPost: [],
};

// Reducers
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        allPost: [...action.post],
      };
    case GET_ONLY_USER_POST:
      return {
        ...state,
        userPost: action.post,
      };
    case GET_LIKE_UNLIKE_POST:
      const newAllPost = [...state.allPost];
      const postIndex = newAllPost.findIndex(
        (post) => post._id == action.post._id
      );
      newAllPost[postIndex] = {
        ...newAllPost[postIndex],
        likes: action.post.likes,
      };
    return {
      ...state,
      allPost: newAllPost,
    };
    default:
      return state;
  }
};

export default PostReducer;
