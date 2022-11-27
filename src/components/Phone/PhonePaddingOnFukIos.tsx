import { Box } from '@mui/material'
import React, { FC } from 'react'
import { IPhoneHeight } from '../../interface'
import './Phone.css'

export interface LayoutProps {
  children: React.ReactNode
  notificationBarColor: string
  backgroundColor: string
  phoneHeight: IPhoneHeight
}

export const PhonePaddingOnFukIos: FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Box width="340px" height="650px"
        sx={{
          position: 'relative',
          // marginTop: "10px",
          borderTop: '50px',
          borderBottom: '50px',
          borderRight: '10px',
          borderLeft: '10px',
          borderStyle: 'solid',
          borderRadius: '20px'
        }}>
        {/* <body style={{
            margin: "0 10px"
          }}> */}
        <div id="PhoneBody" style={{
          marginTop: props.phoneHeight.beforeBody,
          height: props.phoneHeight.body,
          // height: 660,
          marginRight: 0,
          marginLeft: 0
        }}>
          {props.children}
        </div>
        {/* </body> */}
      </Box>
    </>
  )
}
