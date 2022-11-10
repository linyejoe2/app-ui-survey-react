import { useState, useMemo, StrictMode, createContext } from "react";
import ReactDOM from 'react-dom/client'

// style
import CssBaseline from "@mui/material/CssBaseline"
// import Theme from './Theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

// route
import router from './routes'
import {
  RouterProvider,
  // Route,
} from "react-router-dom";

// comp
import TopNavigationBar from './components/TopNavigationBar'
import { store, RootState, AppDispatch } from './store/configurestore'
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';

import Theme from "./Theme";
import Button from "@mui/material/Button";
import App from "./page/App/App";

// const darkTheme = useSelector((state: RootState) => state.theme.darkTheme)
// const dispatch = useDispatch();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      {/* <ThemeProvider theme={darkTheme ? Theme.darkMode : Theme.lightMode}> */}
      <CssBaseline />
      {/* <Button variant="contained" onClick={dispatch}>
          toggle
        </Button> */}
      <TopNavigationBar />
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </Provider>
  </StrictMode>
)
