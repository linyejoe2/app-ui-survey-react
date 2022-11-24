import { createBrowserRouter } from 'react-router-dom'

import App from './page/App/App'
import ErrorPage from './page/ErrorPage'
import { HelloWorld } from './page/HelloWorld'
import Survey from './page/Survey/Survey'

export default createBrowserRouter([
  {
    path: import.meta.env.BASE_URL + '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: import.meta.env.BASE_URL + '/hello-world',
    element: <HelloWorld />
  },
  {
    path: import.meta.env.BASE_URL + '/survey',
    element: <Survey />
  }
])
