import { takeEvery, fork, call, put } from 'redux-saga/effects';

function something() {
  // call api
}

function* callSomething(action) {
  const result = yield call(something, action.param);
  yield put({ type: '', result });
}

function* somethingSaga() {
  yield takeEvery('MY_ACTION', callSomething);
}

export default function* root() {
  yield [
    fork(somethingSaga),
  ];
}
