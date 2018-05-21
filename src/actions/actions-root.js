/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/blog-redux/src/actions/actions-root.js
 */
import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

export const CREATE_POST = "CREATE_POST";

const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const KEY = `?key=B33DUMMYKEY001`;

export function fetchPosts() {
  const url = `${ROOT_URL}/posts${KEY}`;
  const body = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: body
  };
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/posts/${id}${KEY}`;
  const body = axios.get(url);
  return {
    type: FETCH_POST,
    payload: body
  };
}

export function createPost(values, callback) {
  const req = axios
    .post(`${ROOT_URL}/posts${KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: req
  };
}

export function deletePost(id, callback) {
  const url = `${ROOT_URL}/posts/${id}${KEY}`;
  const body = axios.delete(url).then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}
