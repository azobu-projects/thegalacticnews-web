import React from 'react'
import { ThemeProvider, ColorModeProvider } from '@xstyled/emotion'

import { GlobalStyle } from './containers'

import Router from './Router'

// https://xstyled.dev/docs/color-modes
const theme = {
  colors: {
    primary: '#5eafdf',
    secondary: '#297aa3',
    text: '#222',
    textAlt: '#555',
    background: '#fff',
    backgroundAlt: '#eee',
    border: '#ccc',
    modes: {
      dark: {
        primary: '#5eafdf',
        text: '#ddd',
        textAlt: '#aaa',
        background: '#000',
        backgroundAlt: '#111',
        border: '#333'
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
