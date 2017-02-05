import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'mdi/css/materialdesignicons.min.css'
import App from './App'
import reducers from './reducers'

const root = document.getElementById('app')
const store = createStore(reducers)

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <App/>
    </Provider>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('./App', () => {
    require('./App')
    render(renderApp(), root)
  })
}
