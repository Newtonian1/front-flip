import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/events",
    element: <a href="/"><p>Events</p></a>
  },
  {
    path: "/standings",
    element: <a href="/"><p>Standings</p></a>
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
