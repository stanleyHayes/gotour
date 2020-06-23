import {
  GET_SITE_FAILURE,
  GET_SITE_REQUEST,
  GET_SITE_SUCCESS,
} from './touristsite-type';

import axios from 'axios';

export function getSiteRequest() {
  return {
    type: GET_SITE_REQUEST,
  };
}

export function getSiteFailure(error) {
  return {
    type: GET_SITE_FAILURE,
    payload: error,
  };
}

export function getSiteSuccess(site) {
  return {
    type: GET_SITE_SUCCESS,
    payload: site,
  };
}

export function getSite(id) {
  return function (dispatch) {
    dispatch(getSiteRequest());
    axios({
      method: 'get',
      url: `http://localhost:5000/api/v1/Touristsites/${id}`,
    })
      .then(function (response) {
        dispatch(getSiteSuccess(response.data.data));
      })
      .catch(function (error) {
        dispatch(getSiteFailure(error.response.data.error));
      });
  };
}
