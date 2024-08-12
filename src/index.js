import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyled from './styles/GlobalStyled';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Home />
  </React.StrictMode>
);