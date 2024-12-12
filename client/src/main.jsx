import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {AuthProvider} from "./contexts/AuthProvider.jsx"
import router from './routers/router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>
)