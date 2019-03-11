import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
import registerWatcher from './RegisterSaga/RegisterSaga';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(registerWatcher),
  ]);
}
