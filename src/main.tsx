import "./style/main.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './service/store'
import { Provider } from 'react-redux';
// style
import CssBaseline from "@mui/material/CssBaseline"
import Theme from './Theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
// route
import router from './routes'
import { RouterProvider } from "react-router-dom";
// comp
import TopNavigationBar from './components/TopNavigationBar'
import { useDispatch, useSelector, RootState } from './service/store'
import { toggleTheme } from "./service/services"
import { Dashboard } from '@mui/icons-material';
import './i18n';

const ThemeProvid = (props: React.PropsWithChildren) => {
  const dispatch = useDispatch()
  const themeState = useSelector((state: RootState) => state.themeState)
  return (
    <ThemeProvider theme={themeState ? Theme.lightMode : Theme.darkMode}>
      {props.children}
    </ThemeProvider>
  )
}

// gapi.load('client', () => {
//   // now we can use gapi.client
//   // ...
// });

// gapi.auth.authorize({
//   client_id: '115177945713282263329',
//   scope: ['https://www.googleapis.com/auth/drive'],
//   immediate: true
// }, authResult => { })




// gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4");


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <ThemeProvid>
        <CssBaseline />
        <TopNavigationBar />
        <RouterProvider router={router} />
      </ThemeProvid>
    </Provider>
  </React.StrictMode>
)
