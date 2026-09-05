import React from 'react'
import { createRoot } from 'react-dom/client'
import GalleryPage from '../pages/GalleryPage.jsx'
import '../styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GalleryPage />
  </React.StrictMode>,
)
