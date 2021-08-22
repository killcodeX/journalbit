import { GET_ALL_POST, GET_ONLY_USER_POST } from "../actions/actionconstant";

const initialState = {
  allPost:[],
  userPost: [],
};

// Reducers
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        allPost: action.post,
      };
    case GET_ONLY_USER_POST:
      return {
        ...state,
        userPost: action.post,
      };
    default:
      return state;
  }
};

export default PostReducer;
