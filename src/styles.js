import React, { PropTypes } from 'react'
import { ThemeProvider } from 'styled-components'
import color from 'color'

export const colors = {
  primary: '#298FF3',
  sidebar: '#22252A'
}

export const lightTheme = {
  text: color('black').alpha(0.87).string(),
  subtext: color('black').alpha(0.54).string(),
  icon: color('black').alpha(0.54).string(),
  divider: color('black').alpha(0.12).string(),
  hover: color('black').alpha(0.05).string(),
  active: color('black').alpha(0.075).string()
}

export const darkTheme = {
  text: color('white').alpha(0.8).string(),
  subtext: color('white').alpha(0.7).string(),
  icon: color('white').alpha(0.8).string(),
  divider: color('white').alpha(0.12).string(),
  hover: color('white').alpha(0.05).string(),
  active: color('white').alpha(0.1).string()
}

export const fonts = {
  button: 'sans-serif'
}

export const DefaultTheme = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    {children}
  </ThemeProvider>
)

DefaultTheme.propTypes = {
  children: PropTypes.node
}

DefaultTheme.defaultProps = {
  children: null
}

export const DarkTheme = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    {children}
  </ThemeProvider>
)

DarkTheme.propTypes = {
  children: PropTypes.node
}

DarkTheme.defaultProps = {
  children: null
}
