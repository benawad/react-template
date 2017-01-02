import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';


//function* call_(action) {
  //const result = yield call(_);
  //yield put({type: '', result});
//}

//function* _Saga() {
  //yield* takeEvery('', call_);
//}

export default function* root() {
  yield [
    //fork(_Saga),
  ]
}
