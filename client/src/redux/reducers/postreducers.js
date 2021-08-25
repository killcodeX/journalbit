import {
  GET_ALL_POST,
  CREATE_NEW_POST,
  GET_ONLY_USER_POST,
  GET_LIKE_UNLIKE_POST,
  GET_COMMENT_POST,
  GET_DELETE_POST,
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
    case CREATE_NEW_POST:
      return {
        ...state,
        allPost: [action.post, ...state.allPost],
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
    case GET_COMMENT_POST:
      console.log("called from reducer -->", action.post);
      const newAllPostData = [...state.allPost];
      const postIndexData = newAllPostData.findIndex(
        (post) => post._id == action.post._id
      );
      newAllPostData[postIndexData] = {
        ...newAllPostData[postIndexData],
        comments: action.post.comments,
      };
      return {
        ...state,
        allPost: newAllPostData,
      };
    case GET_DELETE_POST:
      const updatedData = state.allPost.filter(
        (post) => post._id !== action.postId
      );
      return {
        ...state,
        allPost: updatedData,
      };
    default:
      return state;
  }
};

export default PostReducer;
