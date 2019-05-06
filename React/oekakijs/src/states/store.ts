import { Store, createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { routerReducer, routerMiddleware } from 'react-router-redux'
import { History } from 'history'

import * as reducers from './ducks'

export default function configureStore(
  initialState = {},
  history: History
): Store {
  const middlewares = [thunk, routerMiddleware(history)]
  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  )
}
