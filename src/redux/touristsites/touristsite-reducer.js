import {
  GET_SITE_FAILURE,
  GET_SITE_REQUEST,
  GET_SITE_SUCCESS,
} from './touristsite-type';

const INITIAL_STATE = {
  loading: false,
  selectedSite: {},
  error: null,
};

const siteReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SITE_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_SITE_SUCCESS:
      return {
        loading: false,
        ...state,
        selectedSite: action.payload,
        error: null,
      };

    case GET_SITE_FAILURE:
      return {
        loading: false,
        ...state,
        error: action.payload,
        selectedSite: {},
      };
    default:
      return state;
  }
};

export default siteReducer;
