
import { HELLO, INCREMENT_ASYNC } from './actions'
import { call, put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export function* watchHelloSaga() {
  console.log("hello watcher");
  yield takeEvery(HELLO, helloSaga)

}

export function* watchIncrementAsync() {
  console.log("increment async watcher")
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);

}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchHelloSaga(),
    watchIncrementAsync()
  ])
}
