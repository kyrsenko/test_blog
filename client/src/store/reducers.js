import { combineReducers } from 'redux';
import * as ACTION_TYPES from './constants.js';

// state for start
const initialState = [];

// Fetch
function fetchReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_FETCH_POSTS:
      return {
        ...state,
        posts: payload
      };
    case ACTION_TYPES.SET_FETCH_POST:
      return {
        ...state,
        post: payload
      };
    case ACTION_TYPES.SET_CREATE_POST:
      return {
        ...state,
        payload
      };
    case ACTION_TYPES.SET_ADD_COMMENT:
      return {
        ...state,
        payload
      };
    case ACTION_TYPES.SET_DELETE_POST:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  fetchReducer
});
