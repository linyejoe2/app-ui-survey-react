import React from 'react'
import ReactDOM from 'react-dom/client'

// style
import CssBaseline from "@mui/material/CssBaseline"
import Theme from './Theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

// route
import router from './routes'
import {
  RouterProvider,
  // Route,
} from "react-router-dom";

// comp
import TopNavigationBar from './components/TopNavigationBar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeProvider theme={Theme.mode == 'light' ? Theme.lightMode : Theme.darkMode}>
      <CssBaseline />
      <TopNavigationBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
