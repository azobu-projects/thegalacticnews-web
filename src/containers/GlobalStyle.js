import { createGlobalStyle } from '@xstyled/emotion'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: text;
    background-color: background;
    transition: background-color 0.2s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
  }

  a {
    text-decoration: none;
    color: #000;
    transition: all 0.2s ease-in-out;
  }
`

export default GlobalStyle
