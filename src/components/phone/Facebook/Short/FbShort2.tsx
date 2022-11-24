import { Skeleton } from '@mui/material'
import { FC } from 'react'

export const FbShort2: FC = () => {
  return (
    <svg className="fb-short-col" width="102" height="177" viewBox="0 0 102 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="101" height="176" rx="13.5" fill="#E4E6EB" stroke="#E5E5E5" />
      {/* <circle cx="27" cy="27" r="19" fill="#1776EF" /> */}
      <foreignObject width="100" height="175">
        <Skeleton sx={{
          width: '38px',
          height: '38px',
          position: 'absolute',
          top: '8px',
          left: '8px'
        }} variant="circular" width={38} height={38} />
      </foreignObject>
    </svg>
  )
}
