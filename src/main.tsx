import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Events from './pages/Events.tsx'
import Standings from './pages/Standings.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/events",
    element: <Events/>
  },
  {
    path: "/standings",
    element: <Standings/>
  },
  {
    path: "/",
    element: <App/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
