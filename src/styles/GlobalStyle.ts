import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    font: 400 1.4rem 'Open Sans', sans-serif;
    overflow: hidden;
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input, button, textarea {
    font: 400 1.6rem Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`

export default GlobalStyle
