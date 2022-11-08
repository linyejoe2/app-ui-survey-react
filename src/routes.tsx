import { createBrowserRouter } from "react-router-dom";

import App from './page/App/App'
import ErrorPage from './page/ErrorPage'
import { HelloWorld } from "./page/HelloWorld"

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/hello-world",
    element: <HelloWorld />
  }
]);