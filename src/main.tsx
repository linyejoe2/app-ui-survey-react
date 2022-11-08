import './style/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import router from './routes'

import {
  RouterProvider,
  // Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
