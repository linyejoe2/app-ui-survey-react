import { createBrowserRouter } from "react-router-dom";

import App from './page/App/App'
import ErrorPage from './page/ErrorPage'
import { HelloWorld } from "./page/HelloWorld"
import Survey from "./page/Survey/Survey";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/hello-world",
    element: <HelloWorld />
  },
  {
    path: "/survey",
    element: <Survey />
  }
]);