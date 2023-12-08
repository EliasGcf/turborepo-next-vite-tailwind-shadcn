import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import './globals.css'
import "@repo/ui/styles.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
