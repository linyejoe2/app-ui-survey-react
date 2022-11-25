import './Dcard.css'

import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import DashboardIcon from '@mui/icons-material/Dashboard'
import NotificationsIcon from '@mui/icons-material/Notifications'
import StyleIcon from '@mui/icons-material/Style'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import BookmarkIcon from '@mui/icons-material/Bookmark'

import { Box, Avatar, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const DcTitleBar: FC = () => {
  const { t } = useTranslation()
  return (
    // <Box className='dc-first-row phone-row'>
    <Box className='dc-title-bar'>
      <input type="text" className="dc-title-input" placeholder={t('dc.t.text')} />
    </Box>
    // </Box>
  )
}

export const DcFunctionBar: FC = () => {
  const [fbNavVal, setFbNavVal] = React.useState(0)
  const { t } = useTranslation()
  return (
    // <Box className='dc-second-row phone-row'>
    <Box className='dc-function-bar'>
      <BottomNavigation
        showLabels
        value={fbNavVal}
        className="dc-nav-bar"
        onChange={(event, newValue) => {
          setFbNavVal(newValue)
        }}>
        <BottomNavigationAction className="nav-bar-col" label={t('dc.s.recommend')} />
        <BottomNavigationAction className="nav-bar-col" label={t('dc.s.all')} />
        <BottomNavigationAction className="nav-bar-col" label={t('dc.s.follow')} />
        <BottomNavigationAction className="nav-bar-col" label={t('dc.s.topic')} />
      </BottomNavigation>
    </Box>
    // </Box>
  )
}

export const DcContent: FC = () => {
  const { t } = useTranslation()
  const contents = []
  for (let i = 0; i < 10; i++) {
    contents.push(
      <Box key={i} className="dc-content">
        <Box className="dc-content-topic">
          <Box className="dc-content-topic-avater-box">
            <Avatar className="dc-content-topic-avater" alt={t('main.un')} src="./dcardWoman.webp" />
          </Box>
          <Typography className="dc-content-topic-text">
            {t('dc.c1.topic')}
          </Typography>
          <Box className="dc-content-topic-icon">
            <MoreHorizIcon />
          </Box>
        </Box>
        <Box className="dc-content-item">
          <Box className="dc-content-text-box">
            <Box className="dc-content-title">
              <Typography className="dc-content-title-text">
                {t('dc.c1.title')}
              </Typography>
            </Box>
            <Box className="dc-content-text">
              <Typography className="dc-content-text-text">
                {t('dc.c1.text')}
              </Typography>
            </Box>
            <Box className="dc-content-like">
              <img width="15px" src="https://megapx.dcard.tw/v1/images/52057289-337a-4f2f-88c0-cb8a77ee422a/responsive?width=32" alt="heart" />
              <Typography className="dc-content-like-like">
                121
              </Typography>
              <img width="16px" src="./comment.svg" alt="comment" />
              <Typography className="dc-content-like-comment">
                5
              </Typography>
              <BookmarkIcon />
              <Typography className="dc-content-like-text">
                {t('dc.c1.store')}
              </Typography>
            </Box>
          </Box>
          <Box className="dc-content-img">
            <img width="320px" src="https://placekitten.com/500/500" alt="picture" />
          </Box>
        </Box>
      </Box>)
  }
  return (<>
    {contents}
  </>)
}

export const DcNavigationBar: FC = () => {
  const [fbNavVal, setFbNavVal] = React.useState(0)

  return (
    <>
      {/* <Box className='dc-third-row phone-row'> */}
      <BottomNavigation
        showLabels
        className='ig-nav-bar'
        value={fbNavVal}
        onChange={(event, newValue) => {
          setFbNavVal(newValue)
        }}
      >
        <BottomNavigationAction className="ig-nav-bar-button" icon={<HomeIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={<DashboardIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={<StyleIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={<ShoppingBagIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={<NotificationsIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={<DensityMediumIcon />} />
      </BottomNavigation>
      {/* </Box> */}
    </>
  )
}
