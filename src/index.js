import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'mdi/css/materialdesignicons.min.css'
import App from './App'

const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <App/>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('./App', () => {
    require('./App')
    render(renderApp(), root)
  })
}
