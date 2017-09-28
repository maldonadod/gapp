import {take, put, call, takeLatest, fork} from 'redux-saga/effects'
import {
  post
} from '../network/fetch'
import {
  API_URL
} from '../env'
import {
  createAction
  ,ACTIVITY_INDICATOR_ON
  ,ACTIVITY_INDICATOR_OFF
} from '../actions'
import {
  ACTIONS_ACTIVITY_INDICATOR_ON
  ,ACTIONS_ACTIVITY_INDICATOR_OFF
} from '../src/business/network'

const auth = function* ({credentials}) {

  const url = `${API_URL}/login`
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

const activity_off = createAction(ACTIVITY_INDICATOR_OFF)
const activity_on = createAction(ACTIVITY_INDICATOR_ON)

const root = function* () {

  const activityOn = watch_and_dispatch([ACTIONS_ACTIVITY_INDICATOR_ON, activity_on])
  const activityOff = watch_and_dispatch([ACTIONS_ACTIVITY_INDICATOR_OFF, activity_off])

  yield fork(activityOn)
  yield fork(activityOff)
  
  yield takeLatest('LOGIN_REQUEST', auth)
}

export {
  root
}
