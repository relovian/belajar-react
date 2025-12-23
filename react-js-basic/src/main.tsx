import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppInstagram from './AppInstagram.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppInstagram />
  </StrictMode>
)
