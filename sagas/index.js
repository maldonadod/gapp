import {take, put, call} from 'redux-saga/effects'

const URL = `https://gapp-server.herokuapp.com`

const auth = ({email,password}) => {

  return fetch(`${URL}/login`, {
    method: 'POST',
    body: JSON.stringify({email,password}),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}

const flow = function* () {

  try {
    while (true) {
      const {credentials} = yield take('LOGIN_REQUEST')

      const res = yield call(auth, credentials)

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
    }
  } catch (e) {
    yield put({
      type: 'LOGIN_FAILED',
      res: e.message
    })
  }
};

export {
  flow
}
