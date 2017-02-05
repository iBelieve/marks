import React, { PropTypes } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import color from 'color'

export const colors = {
  primary: '#298FF3',
  sidebar: '#22252A',
  background: '#FAFAFA'
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
  default: `-apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`
}

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html, body, #app {
    margin: 0;
    height: 100%;
    color: ${lightTheme.text};
    background-color: ${colors.background};
    font-family: ${fonts.default};
    font-size: 14px;
  }
`

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
