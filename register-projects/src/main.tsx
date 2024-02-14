import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home/Index.tsx'
import { Login } from './pages/Login/Index.tsx'
import { PrivateRouter } from './layout/PrivateRouter.tsx'
import { RegisterProject } from './pages/Register-projects/Index.tsx'
import { Projects } from './pages/Projects/Index.tsx'
import { Register } from './pages/Register/Index.tsx'


const router = createBrowserRouter([
  {
    element: <PrivateRouter/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/registerProjects',
        element: <RegisterProject/>
      },
      {
        path: '/projects',
        element: <Projects/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
