import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './views/containers/App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'

import { createBrowserHistory as createHistory } from 'history'
import configureStore from './states/store'

const history = createHistory()
const store = configureStore({}, history)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
