import * as ACTION_TYPES from './constants.js';
import { take, put, all } from 'redux-saga/effects';

import axios from 'axios';

// actions
export const fetchPosts = () => ({
  type: ACTION_TYPES.RUN_FETCH_POSTS
});
export const fetchPost = id => ({
  type: ACTION_TYPES.RUN_FETCH_POST,
  id
});
export const deletePost = id => ({
  type: ACTION_TYPES.RUN_DELETE_POST,
  id
});
export const createPost = body => {
  return {
    type: ACTION_TYPES.RUN_CREATE_POST,
    body
  };
};
export const addComment = (id, body) => {
  return {
    type: ACTION_TYPES.RUN_ADD_COMMENT,
    id,
    body
  };
};

// Sagas
/* eslint-disable */
function* fetchPostsSaga() {
  while (true) {
    yield take(ACTION_TYPES.RUN_FETCH_POSTS);
    const response = yield axios.get('/posts');
    yield put({
      type: ACTION_TYPES.SET_FETCH_POSTS,
      payload: response.data
    });
  }
}

function* fetchPostSaga() {
  while (true) {
    const { id } = yield take(ACTION_TYPES.RUN_FETCH_POST);
    const response = yield axios.get(`/posts/${id}`);
    yield put({
      type: ACTION_TYPES.SET_FETCH_POST,
      payload: response.data
    });
  }
}

function* deletePostSaga() {
  while (true) {
    const { id } = yield take(ACTION_TYPES.RUN_DELETE_POST);
    const response = yield axios.delete(`/api/posts/${id}`);
    console.log(response)
    yield put({
      type: ACTION_TYPES.SET_DELETE_POST,
      payload: response.data
    });
  }
}


function* createPostSaga() {
  while (true) {
    const { body } = yield take(ACTION_TYPES.RUN_CREATE_POST);
    const response = yield axios.post(`/api/posts`, body);
    yield put({
      type: ACTION_TYPES.SET_CREATE_POST,
      payload: response.data
    });
  }
}

function* addCommentSaga() {
  while (true) {
    const { id, body } = yield take(ACTION_TYPES.RUN_ADD_COMMENT);
    const response = yield axios.put(`/api/comment/${id}`, body);
    console.log('update', response.data);
    yield put({
      type: ACTION_TYPES.SET_ADD_COMMENT
    });
  }
}

export function* rootSaga() {
  yield all([
    fetchPostsSaga(),
    fetchPostSaga(),
    createPostSaga(),
    addCommentSaga(),
    deletePostSaga()
  ]);
}
/* eslint-enable */
