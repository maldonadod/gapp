import {
  createStore
  ,applyMiddleware
  ,compose
} from 'redux'
import reducers from './reducers'
import {
  root
} from './sagas'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(reducers, enhancer)

sagaMiddleware.run(root)

export default store
