import { createGlobalStyle } from 'styled-components';

import colors from './colors';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${colors.background};
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
  }
`;
