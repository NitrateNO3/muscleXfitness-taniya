import React from 'react'
import { createRoot } from 'react-dom/client'
import VisitPage from '../pages/VisitPage.jsx'
import '../styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisitPage />
  </React.StrictMode>,
)
