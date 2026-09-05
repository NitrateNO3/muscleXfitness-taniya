import React from 'react'
import { createRoot } from 'react-dom/client'
import ReviewsPage from '../pages/ReviewsPage.jsx'
import '../styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReviewsPage />
  </React.StrictMode>,
)
