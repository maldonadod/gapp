import {take, put, call, takeLatest, fork} from 'redux-saga/effects'

const URL = `https://gapp-server.herokuapp.com`

const post = ({url,body}) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}

const auth = function* ({credentials}) {

  const url = `${URL}/login`
  try {
    const res = yield call(post, {url,body:credentials})
    
    if (res.status === 'OK') {
      yield put({
        type: 'LOGIN_SUCCESS',
        res: res.data
      })
    } else if (res.status === 'ERR') {
      yield put({
        type: 'LOGIN_FAILED',
        res: res.message
      })
    }
  } catch (e) {
    yield put({
      type: 'LOGIN_FAILED',
      res: e.message
    })
  }
}

const watch_and_dispatch = ([watch, action]) => {
  return function* () {
    while (true) {
      yield take(watch)
      yield put(action)
    }
  }
}

const activity_off = () => ({
  type: 'ACTIVITY_INDICATOR_OFF'
})
const activity_on = () => ({
  type: 'ACTIVITY_INDICATOR_ON'
})

const root = function* () {

  const activityOn = watch_and_dispatch([['LOGIN_REQUEST'], activity_on()])
  const activityOff = watch_and_dispatch([['LOGIN_SUCCESS', 'LOGIN_FAILED'], activity_off()])

  yield fork(activityOn)
  yield fork(activityOff)
  
  yield takeLatest('LOGIN_REQUEST', auth)
}

export {
  root
}
