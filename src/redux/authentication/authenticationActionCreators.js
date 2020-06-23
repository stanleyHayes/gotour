import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  GET_LOGGED_IN_USER_SUCCESS,
  GET_LOGGED_IN_USER_REQUEST,
  GET_LOGGED_IN_USER_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_FAILURE,
  RESTORE_TOKEN_SUCCESS,
  RESTORE_TOKEN_FAILURE,
  RESTORE_TOKEN_REQUEST,
  VERIFY_ACCOUNT_FAILURE,
  VERIFY_ACCOUNT_REQUEST,
  VERIFY_ACCOUNT_SUCCESS,
} from './authenticationActionTypes';

import Swal from 'sweetalert2';

import axios from 'axios';

//Sign up action creators
const signUpRequest = function () {
  return {
    type: SIGN_UP_REQUEST,
  };
};

const signUpSuccess = function (user, token) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      user,
      token,
    },
  };
};

const signUpFailure = function (error) {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUp = function (user, history) {
  return function (dispatch) {
    dispatch(signUpRequest());
    axios({
      method: 'post',
      url: `http://localhost:5000/api/v1/auth/register`,
      data: user,
    })
      .then(function (response) {
        const { data } = response.data;
        dispatch(signUpSuccess(data));
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: `Account creation successful`,
        });
        history.push('/login');
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
        dispatch(signUpFailure(error.response.data.error));
      });
  };
};

//sign in action creators
export const signInRequest = function () {
  return {
    type: SIGN_IN_REQUEST,
  };
};

export const signInSuccess = function (token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, currentUser: user },
  };
};

export const signInFailure = function (error) {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signIn = function (email, password, history) {
  return function (dispatch) {
    dispatch(signInRequest());
    axios({
      method: 'post',
      url: `http://localhost:5000/api/v1/auth/login`,
      data: { email, password },
    })
      .then(function (response) {
        const { token, data } = response.data;
        dispatch(signInSuccess(token, data));
        localStorage.setItem('USER_TOKEN', token);
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: `Login successful`,
        });
        history.push('/');
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
        dispatch(signInFailure(error.response.data.error));
      });
  };
};

//sign out action creators
export const signOutRequest = function () {
  return {
    type: SIGN_OUT_REQUEST,
  };
};

export const signOutSuccess = function () {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = function () {
  return {
    type: SIGN_OUT_FAILURE,
  };
};

export const signOut = function () {
  return function (dispatch) {
    dispatch(signOutRequest());
    localStorage.clear();
    if (localStorage.getItem('USER_TOKEN')) {
      dispatch(signOutFailure());
    } else {
      dispatch(signOutSuccess());
    }
  };
};

//restore token action creators
export const restoreTokenRequest = function () {
  return {
    type: RESTORE_TOKEN_REQUEST,
  };
};

export const restoreTokenSuccess = function (token) {
  return {
    type: RESTORE_TOKEN_SUCCESS,
    payload: token,
  };
};

export const restoreTokenFailure = function (error) {
  return {
    type: RESTORE_TOKEN_FAILURE,
    payload: error,
  };
};

export const restoreToken = function () {
  return function (dispatch) {
    dispatch(restoreTokenRequest());
    const token = localStorage.getItem('USER_TOKEN');
    if (token) {
      dispatch(restoreTokenSuccess(token));
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: `Session restored`,
      });
    } else {
      dispatch(restoreTokenFailure('Session expired. Log in again'));
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Session expired. Log in again',
      });
    }
  };
};

//reset password action creators
export const resetPasswordRequest = function () {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};

export const resetPasswordSuccess = function (token) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: token,
  };
};

export const resetPasswordFailure = function (error) {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: error,
  };
};

export const resetPassword = function (password, resetToken) {
  return function (dispatch) {
    dispatch(resetPasswordRequest());
    axios({
      method: 'put',
      url: `http://localhost:5000/api/v1/auth/reset-password/${resetToken}`,
      data: { password },
    })
      .then(function (response) {
        const { token } = response.data;
        dispatch(resetPasswordSuccess(token));
        localStorage.setItem('USER_TOKEN', token);
        Swal.fire({
          icon: 'success',
          title: 'Password Reset',
          text: `Password changed successfully`,
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Reset Password failed',
          text: error.response.data.error,
        });
        dispatch(resetPasswordFailure(error.response.data.error));
      });
  };
};

//forgot password action creators
export const forgotPasswordRequest = function () {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPasswordSuccess = function () {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};

export const forgotPasswordFailure = function (error) {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

export const forgotPassword = function (email) {
  return function (dispatch) {
    dispatch(forgotPasswordRequest());
    axios({
      method: 'post',
      url: `http://localhost:5000/api/v1/auth/forgot-password`,
      data: { email },
    })
      .then(function (response) {
        const { message } = response.data;
        dispatch(forgotPasswordSuccess());
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: message,
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
        dispatch(forgotPasswordFailure(error.response.data.error));
      });
  };
};

//change password action creators
export const changePasswordRequest = function () {
  return {
    type: CHANGE_PASSWORD_REQUEST,
  };
};

export const changePasswordSuccess = function () {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
  };
};

export const changePasswordFailure = function (error) {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: error,
  };
};

export const changePassword = function (currentPassword, newPassword, token) {
  return function (dispatch) {
    dispatch(changePasswordRequest());
    axios({
      method: 'put',
      url: `http://localhost:5000/api/v1/auth/change-password`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { currentPassword, newPassword },
    })
      .then(function () {
        dispatch(changePasswordSuccess());
        Swal.fire({
          icon: 'success',
          title: 'Password changed',
          text: `Password changed successfully`,
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
        dispatch(changePasswordFailure(error.response.data.error));
      });
  };
};

//get logged in user action creators
export const getLoggedInUserRequest = function () {
  return {
    type: GET_LOGGED_IN_USER_REQUEST,
  };
};

export const getLoggedInUserSuccess = function (user, token) {
  return {
    type: GET_LOGGED_IN_USER_SUCCESS,
    payload: { currentUser: user, token },
  };
};

export const getLoggedInUserFailure = function (error) {
  return {
    type: GET_LOGGED_IN_USER_FAILURE,
    payload: error,
  };
};

export const getLoggedInUser = function (token) {
  return function (dispatch) {
    dispatch(getLoggedInUserRequest());
    axios({
      method: 'get',
      url: `http://localhost:5000/api/v1/auth/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        const { data, token } = response.data;
        dispatch(getLoggedInUserSuccess(data, token));
      })
      .catch(function (error) {
        dispatch(getLoggedInUserFailure(error.response.data.error));
      });
  };
};

//get logged in user action creators
export const verifyAccountRequest = function () {
  return {
    type: VERIFY_ACCOUNT_REQUEST,
  };
};

export const verifyAccountSuccess = function (user) {
  return {
    type: VERIFY_ACCOUNT_SUCCESS,
    payload: user,
  };
};

export const verifyAccountFailure = function (error) {
  return {
    type: VERIFY_ACCOUNT_FAILURE,
    payload: error,
  };
};

export const verifyAccount = function (verifyToken) {
  return function (dispatch) {
    dispatch(verifyAccountRequest());
    axios({
      method: 'put',
      url: `http://localhost:5000/api/v1/auth/verify/${verifyToken}`,
    })
      .then(function (response) {
        const { data } = response.data;
        dispatch(verifyAccountSuccess(data));
        Swal.fire({
          icon: 'success',
          title: 'Verified',
          text: 'Account Verified',
        });
      })
      .catch(function (error) {
        dispatch(verifyAccountFailure(error.response.data.error));
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
      });
  };
};
