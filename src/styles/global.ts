import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['border']};
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    border: 0 none;
    font: 400 1rem Roboto, sans-serif;
  }
}`;
