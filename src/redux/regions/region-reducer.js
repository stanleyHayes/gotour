import {
  GET_REGIONS_FAILURE,
  GET_REGIONS_REQUEST,
  GET_REGIONS_SUCCESS,
  GET_REGION_FAILURE,
  GET_REGION_REQUEST,
  GET_REGION_SUCCESS,
} from './region-types';

import { REGIONS } from './region.data';

const INITIAL_STATE = {
  regions: REGIONS,
  loading: false,
  selectedRegion: {},
  error: null,
};

const regionReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_REGIONS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_REGIONS_SUCCESS:
      return {
        loading: false,
        ...state,
        regions: action.payload,
        error: null,
      };

    case GET_REGIONS_FAILURE:
      return {
        loading: false,
        ...state,
        error: action.payload,
        regions: [],
      };

    case GET_REGION_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_REGION_SUCCESS:
      return {
        loading: false,
        ...state,
        selectedRegion: action.payload,
        error: null,
      };

    case GET_REGION_FAILURE:
      return {
        loading: false,
        ...state,
        error: action.payload,
        selectedRegion: {},
      };
    default:
      return state;
  }
};

export default regionReducer;
