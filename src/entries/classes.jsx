import React from 'react'
import { createRoot } from 'react-dom/client'
import ClassesPage from '../pages/ClassesPage.jsx'
import '../styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClassesPage />
  </React.StrictMode>,
)
