import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import IndexRoutes from './routes'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IndexRoutes />
  </StrictMode>,
)
