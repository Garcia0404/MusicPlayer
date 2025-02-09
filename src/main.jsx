import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './pages/router/AppRouter'
import { AppContext } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <AppContext>
      <AppRouter />
    </AppContext>
  </BrowserRouter>,
)
