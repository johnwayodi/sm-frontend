import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from './types';

export const loginUser = payload => ({
  type: LOGIN_START,
  payload,

});
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,

});
export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,

});
