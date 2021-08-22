import { GET_ONLY_USER_POST } from "../actions/actionconstant";

const initialState = {
  userPost: [],
};

// Reducers
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
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
