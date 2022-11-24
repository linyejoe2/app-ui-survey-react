import Button from '@mui/material/Button'
import { useRouteError } from 'react-router-dom'

interface Ierr {
  statusText?: string,
  message?: string,
  status?: number
}

export default function ErrorPage() {
  const error: Ierr = useRouteError() as Ierr
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.status + ' ' || ''}</i>
        <i>{error?.statusText || error?.message || 'undefined error '}</i>
        <i>{' 😭😭😭'}</i>
      </p>
      <Button variant="outlined" href="./">Maybe back to home page 🤔🤔🤔</Button>
    </div>
  )
}
