import {call, put, takeEvery} from 'redux-saga/effects';

const bokus = `http://z.bokus.ru/test.json`;
const jpl = `https://jsonplaceholder.typicode.com/posts`;

const getUsers = () => {
  // console.log(fetch(bokus).then(response => response.json()))
  return fetch(bokus).then(response => response.json());
};

function* sagaGetUser() {
  try {
    yield put({type: 'SHOW_LOADER'});
    let response = yield call(getUsers);
    yield put({type: 'SET_DATA', payload: response});
    yield put({type: 'HIDE_LOADER'});
  } catch (er) {
    console.log(er);
  }
}

function* mainSaga() {
  yield takeEvery('GET_USERS', sagaGetUser);
}

export default mainSaga;
