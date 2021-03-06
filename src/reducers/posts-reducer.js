/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/reducers/post-reducer.js
 */
import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions/actions-root";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload.data); // [ post1, post2 ]
      // {4: post}
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      console.log(action.payload.data);
      // const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;    // post
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
