import { all, fork } from 'redux-saga/effects';

import weatherSaga from './weatherSaga/saga';

export default function* root() {
  yield all([fork(weatherSaga)]);
}
