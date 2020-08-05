import React from 'react'
import { ThemeProvider, ColorModeProvider } from '@xstyled/emotion'

import { GlobalStyle } from './containers'

import Router from './Router'

// https://xstyled.dev/docs/color-modes
const theme = {
  colors: {
    primary: '#5eafdf',
    text: '#000',
    textAlt: '#333',
    background: '#fff',
    backgroundAlt: '#eee',
    border: '#ccc',
    modes: {
      dark: {
        primary: '#5eafdf',
        text: '#fff',
        textAlt: '#ccc',
        background: '#111',
        backgroundAlt: '#000',
        border: '#222'
      }
    }
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ColorModeProvider>
        <Router />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
