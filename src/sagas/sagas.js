import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';

function something() {
  // call api
}

function* callSomething(action) {
  const result = yield call(something, action.param);
  yield put({ type: '', result });
}

function* somethingSaga() {
  yield* takeEvery('', callSomething);
}

export default function* root() {
  yield [
    fork(somethingSaga),
  ];
}
