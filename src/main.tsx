import './style/main.css'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { store, useSelector, RootState } from './service/store'
import { Provider } from 'react-redux'
// style
import CssBaseline from '@mui/material/CssBaseline'
import Theme from './Theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
// route
import router from './routes'
import { RouterProvider } from 'react-router-dom'
// comp
import TopNavigationBar from './components/TopNavigationBar'

import './i18n'
import { TourProvider } from '@reactour/tour'
import { SurveyTourSteps2, SurveyTourSteps } from './components/Survey/SurveyTourStep'
import { useTranslation } from 'react-i18next'

const ThemeProvid = (props: React.PropsWithChildren) => {
  // const dispatch = useDispatch()

  // wellcome
  let wellcome = true
  useEffect(() => {
    if (!wellcome) return
    wellcome = false
    // console.log('URL: ' + import.meta.env.BASE_URL)
    console.log('%c恭喜你來到了秘密樂園。\n你知道嗎？在非洲，每六十秒，就有一分鐘過去。', 'color: red; font-size: 30px')
    console.log('%c想看更多，歡迎來我的 Blog 看。\nhttps://linyejoe2.github.io/', 'color: red; font-size: 30px')
  }, [])

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

const MainPage = () => {
  const { t } = useTranslation()
  return (<React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <TourProvider steps={SurveyTourSteps(t)}
        showNavigation={false}
        onClickMask={prop => { prop.setCurrentStep(prop.currentStep + 1) }}
        showBadge={false}
        showDots={false}
        showCloseButton={false}
      // styles={
      // }
      >
        <ThemeProvid>
          <CssBaseline />
          <TopNavigationBar />
          <RouterProvider router={router} />
        </ThemeProvid>
      </TourProvider>
    </Provider>
  </React.StrictMode>)
}

// gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4");
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MainPage />
)
