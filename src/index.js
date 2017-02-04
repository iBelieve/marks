import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import './global.css'

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
