
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css' // 🌌 Global styles including ClarkSans_121

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App engineLabels={{ on: 'Sovereign', off: 'Rented' }} />
  </React.StrictMode>
)
