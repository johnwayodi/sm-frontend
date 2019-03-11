import { put, call, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/LoginActions/types';
import axios from 'axios';


export function* loginWorker(payload) {
  const data = payload.payload;
  try {
    const response = yield call(
      axios.post,
      'https://jw-store-manager-apiv2.herokuapp.com/auth/login', data );
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: {
        message: response.data.message,
        token: response.data.access_token,
        role: response.data.user_role,
      },
    });

  } catch (error) {
    yield put({
      type: types.LOGIN_ERROR,
      payload: { error: error.response.data.message },
    });
  }
}

function* loginWatcher() {
  yield takeEvery(types.LOGIN_START, loginWorker);
}

export default loginWatcher;
