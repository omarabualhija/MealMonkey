import {
  POPULAR_RESTURENTS_REQUEST,
  POPULAR_RESTURENTS_SUCCESS,
  POPULAR_RESTURENTS_FAIL,
  OPEN_NOW_REQUEST,
  OPEN_NOW_SUCCESS,
  OPEN_NOW_FAIL,
  HOT_AND_NEW_REQUEST,
  HOT_AND_NEW_SUCCESS,
  HOT_AND_NEW_FAIL,
} from '../Constant/getDataConstant.js';

const initPopularResturents = {data: [], loading: true, error: ''};
export const getPopularResturents = (state = initPopularResturents, action) => {
  if (action.type === POPULAR_RESTURENTS_REQUEST) {
    return {...state, loading: true};
  }
  if (action.type === POPULAR_RESTURENTS_SUCCESS) {
    return {...state, data: action.payload, loading: false};
  }

  if (action.type === POPULAR_RESTURENTS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

const initOpenNow = {data: [], loading: true, error: ''};
export const getOpenNow = (state = initOpenNow, action) => {
  if (action.type === OPEN_NOW_REQUEST) {
    return {...state, loading: true};
  }
  if (action.type === OPEN_NOW_SUCCESS) {
    return {...state, data: action.payload, loading: false};
  }

  if (action.type === OPEN_NOW_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

const initHotAndNew = {data: [], loading: true, error: ''};
export const getHotAndNew = (state = initHotAndNew, action) => {
  if (action.type === HOT_AND_NEW_REQUEST) {
    return {...state, loading: true};
  }
  if (action.type === HOT_AND_NEW_SUCCESS) {
    return {...state, data: action.payload, loading: false};
  }

  if (action.type === HOT_AND_NEW_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};
