import { Alert } from '@mui/material'
import { FC } from 'react'

export const AlertBar: FC = () => {
  return (
    <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>
  )
}
