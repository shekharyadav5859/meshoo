import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { Login } from './Login.jsx'



let allrouting = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  }
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allrouting}/>
  </StrictMode>,
)
