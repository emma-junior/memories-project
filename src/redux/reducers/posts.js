import {
  fetch_post,
  create_post,
  update,
  delete_post,
  like,
} from "../actions/actionTypes";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case fetch_post:
      return action.payload;
    case create_post:
      return [...posts, action.payload];
    case update:
    case like:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case delete_post:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
