import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppInstagram from './AppInstagram.tsx'
import { BrowserRouter } from 'react-router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppInstagram />
    </BrowserRouter>
  </StrictMode>
)
