import React from 'react';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
