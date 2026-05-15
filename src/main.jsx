import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (sessionStorage.redirect) {
  window.history.replaceState(null, null, sessionStorage.redirect);
  delete sessionStorage.redirect;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
