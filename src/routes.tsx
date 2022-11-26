import { createHashRouter } from 'react-router-dom'

import App from './page/App/App'
import ErrorPage from './page/ErrorPage'
import { FinishPage } from './page/FinishPage'
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
  }
]
  // , {
  //   basename: import.meta.env.BASE_URL.slice(0, -1)
  // }
)
