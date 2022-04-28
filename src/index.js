import React from 'react';
import { createRoot } from 'react-dom/client';
import 'flowbite';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App tab="home" />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
