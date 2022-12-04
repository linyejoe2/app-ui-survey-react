import { createHashRouter } from 'react-router-dom'
import { AboutPage } from './page/About/AboutPage'

import App from './page/App/App'
import ErrorPage from './page/ErrorPage'
import { FinishPage } from './page/FinishPage/FinishPage'
import { HelloWorld } from './page/HelloWorld'
import Survey from './page/Survey/Survey'

export default createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/hello-world',
    element: <HelloWorld />
  },
  {
    path: '/survey',
    element: <Survey />
  },
  {
    path: '/finish',
    element: <FinishPage />
  },
  {
    path: '/about-us',
    element: <AboutPage />
  }
]
  // , {
  //   basename: import.meta.env.BASE_URL.slice(0, -1)
  // }
)
