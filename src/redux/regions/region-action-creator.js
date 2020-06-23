import {
  GET_REGIONS_FAILURE,
  GET_REGIONS_REQUEST,
  GET_REGIONS_SUCCESS,
  GET_REGION_FAILURE,
  GET_REGION_REQUEST,
  GET_REGION_SUCCESS,
} from './region-types';

import axios from 'axios';

export function getRegionsRequest() {
  return {
    type: GET_REGIONS_REQUEST,
  };
}

export function getRegionsFailure(error) {
  return {
    type: GET_REGIONS_FAILURE,
    payload: error,
  };
}

export function getRegionsSuccess(regions) {
  return {
    type: GET_REGIONS_SUCCESS,
    payload: regions,
  };
}

export function getRegions() {
  return function (dispatch) {
    dispatch(getRegionsRequest());
    axios({
      method: 'get',
      url: `http://localhost:5000/api/v1/regions`,
    })
      .then(function (response) {
        console.log(response.data);
        dispatch(getRegionsSuccess(response.data.data));
      })
      .catch(function (error) {
        dispatch(getRegionsFailure(error.response.data.error));
      });
  };
}

export function getRegionRequest() {
  return {
    type: GET_REGION_REQUEST,
  };
}

export function getRegionFailure(error) {
  return {
    type: GET_REGION_FAILURE,
    payload: error,
  };
}

export function getRegionSuccess(region) {
  return {
    type: GET_REGION_SUCCESS,
    payload: region,
  };
}

export function getRegion(id) {
  return function (dispatch) {
    dispatch(getRegionRequest());
    axios({
      method: 'get',
      url: `http://localhost:5000/api/v1/regions/${id}`,
    })
      .then(function (response) {
        dispatch(getRegionSuccess(response.data.data));
      })
      .catch(function (error) {
        dispatch(getRegionFailure(error.response.data.error));
      });
  };
}
