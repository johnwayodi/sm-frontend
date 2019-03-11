import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/RegisterActions/types';

export function* registerSaga(payload) {
  try {
    const response = yield call(
      axios.post,
      'https://jw-store-manager-apiv2.herokuapp.com/auth/register', payload.payload,
    );
    yield put({
      type: types.REGISTER_SUCCESS,
      payload: { user: response.data.user },
    });
  } catch (err) {
    yield put({
      type: types.REGISTER_ERROR,
      payload: { error: err.response.data.message },
    });
  }
}

function* registerWatcher() {
  yield takeEvery(
    types.REGISTER_START, registerSaga,
  );
}

export default registerWatcher;
