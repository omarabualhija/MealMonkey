import axios from 'axios';
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
  OFFERS_RESTURENTS_REQUEST,
  OFFERS_RESTURENTS_SUCCESS,
  OFFERS_RESTURENTS_FAIL,
} from '../Constant/getDataConstant.js';
const YELP_API_KEY =
  'FVVMEbmZ_IAfIs3glqpcI62mIkECy6X0bvijSsq1YPJ5eIJxDWPv3CJ2bcgZfivLJ-IoXIWKtORr-Y_did2O5AkoC5hRUOOn3aynsqQXZm_0vB-BkZmpOAS1AUnsYXYx';

const apiOptions = {
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
};

export const getPopularResturent =
  (limit = 4) =>
  async dispatch => {
    dispatch({type: POPULAR_RESTURENTS_REQUEST});
    try {
      const {
        data: {businesses},
      } = await axios.get(
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=canada&sort_by=rating&limit=${limit}`,
        apiOptions,
      );
      dispatch({type: POPULAR_RESTURENTS_SUCCESS, payload: businesses});
    } catch (error) {
      dispatch({type: POPULAR_RESTURENTS_FAIL, payload: error});
    }
  };

export const getOpenNowResturent =
  (limit = 4) =>
  async dispatch => {
    dispatch({type: OPEN_NOW_REQUEST});
    try {
      const {
        data: {businesses},
      } = await axios.get(
        `https://api.yelp.com/v3/businesses/search?location=canada&open_now=true&limit=${limit}`,
        apiOptions,
      );
      dispatch({type: OPEN_NOW_SUCCESS, payload: businesses});
    } catch (error) {
      dispatch({type: OPEN_NOW_FAIL, payload: error});
    }
  };

export const getHotAndNew =
  (limit = 4) =>
  async dispatch => {
    dispatch({type: HOT_AND_NEW_REQUEST});
    try {
      const {
        data: {businesses},
      } = await axios.get(
        `https://api.yelp.com/v3/businesses/search?location=canada&attributes=hot_and_new&limit=${limit}`,
        apiOptions,
      );
      dispatch({type: HOT_AND_NEW_SUCCESS, payload: businesses});
    } catch (error) {
      dispatch({type: HOT_AND_NEW_FAIL, payload: error});
    }
  };

export const getOffersData =
  (limit = 20) =>
  async dispatch => {
    dispatch({type: OFFERS_RESTURENTS_REQUEST});
    try {
      const {
        data: {businesses},
      } = await axios.get(
        `https://api.yelp.com/v3/businesses/search?location=canada&price=$&limit=${limit}`,
        apiOptions,
      );
      console.log('sss', businesses);
      dispatch({type: OFFERS_RESTURENTS_SUCCESS, payload: businesses});
    } catch (error) {
      dispatch({type: OFFERS_RESTURENTS_FAIL, payload: error});
    }
  };
