import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  RESTORE_TOKEN_REQUEST,
  RESTORE_TOKEN_FAILURE,
  RESTORE_TOKEN_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_LOGGED_IN_USER_FAILURE,
  GET_LOGGED_IN_USER_REQUEST,
  GET_LOGGED_IN_USER_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  VERIFY_ACCOUNT_REQUEST,
  VERIFY_ACCOUNT_FAILURE,
  VERIFY_ACCOUNT_SUCCESS,
} from './authenticationActionTypes';

const user = {
  name: 'Stanley Hayford',
  favorites: [
    {
      name: 'Kakum National Park',
      image: `${process.env.PUBLIC_URL}/images/Kakum.jpg`,
      region: {
        name: 'Central Region',
      },
    },
    {
      name: 'Kakum National Park',
      image: `${process.env.PUBLIC_URL}/images/Kakum.jpg`,
      region: {
        name: 'Central Region',
      },
    },
    {
      name: 'Kakum National Park',
      image: `${process.env.PUBLIC_URL}/images/Kakum.jpg`,
      region: {
        name: 'Central Region',
      },
    },
    {
      name: 'Kakum National Park',
      image: `${process.env.PUBLIC_URL}/images/Kakum.jpg`,
      region: {
        name: 'Central Region',
      },
    },
  ],
  wantToGo: [
    {
      name: 'Kakum National Park',
      image: `${process.env.PUBLIC_URL}/images/Kakum.jpg`,
      region: {
        name: 'Central Region',
      },
    },
    {
      name: 'Kakum National Park',
      image: `${process.env.PUBLIC_URL}/images/Kakum.jpg`,
      region: {
        name: 'Central Region',
      },
    },
    {
      name: 'Kakum National Park',
      image: `${process.env.PUBLIC_URL}/images/Kakum.jpg`,
      region: {
        name: 'Central Region',
      },
    },
  ],
};
const initialState = {
  currentUser: null,
  token: '',
  error: '',
  loading: false,
};

const authenticationReducer = function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        currentUser: action.payload.currentUser,
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
      };

    case SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: null,
        token: null,
      };

    case SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESTORE_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RESTORE_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.user,
      };

    case RESTORE_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        token: null,
        error: action.payload,
      };

    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.user,
      };

    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_LOGGED_IN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_LOGGED_IN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.currentUser,
        token: action.payload.token,
      };

    case GET_LOGGED_IN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        token: null,
        error: action.payload,
      };

    case VERIFY_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case VERIFY_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
