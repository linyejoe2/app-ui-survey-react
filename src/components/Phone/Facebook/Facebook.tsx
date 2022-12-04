import './Facebook.css'

// components
import { FbCreateShort } from './Short/FbCreateShort'
import { FbShort1 } from './Short/FbShort1'
import { FbShort2 } from './Short/FbShort2'

// icon
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AddIcon from '@mui/icons-material/Add'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CloseIcon from '@mui/icons-material/Close'
import RecommendIcon from '@mui/icons-material/Recommend'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import CollectionsIcon from '@mui/icons-material/Collections'
import HomeIcon from '@mui/icons-material/Home'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import TourOutlinedIcon from '@mui/icons-material/TourOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

import { AppBar, Avatar, Badge, BottomNavigation, BottomNavigationAction, Box, IconButton, Skeleton, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { IFCProps } from '../../../interface'

export const FbFirstRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="fb-first-bar" >
      {props!.children}
    </AppBar>
  )
}

export const FbSecondRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="static" className="fb-secend-bar">
      {props!.children}
    </AppBar>
  )
}

export const FbThirdRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <Box className="fb-short">
      {props!.children}
    </Box>
  )
}

export const FbFourthRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="fb-last-bar">
      {props!.children}
    </AppBar>
  )
}

export const FbSearchBar: FC = () => {
  return (
    <>
      <Toolbar className="CToolbar" sx={{
        // backgroundColor: suveyData.positionDatas[
        //   suveyData.positionDatas.findIndex(val => { return val.position == '1' })
        // ].color,
        backgroundColor: '#ffffff',
        m: '0',
        p: '0',
        px: '0'
      }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          className="fb-tb-t"
        >
          facebook
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex' }}>
          <IconButton className="fb-tb-b" size="small" aria-label="show 4 new mails" color="inherit">
            <AddIcon />
          </IconButton>
          <IconButton className="fb-tb-b" size="small" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <SearchIcon />
            </Badge>
          </IconButton>
          <IconButton
            className="fb-tb-b"
            size="small"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </>
  )
}

export const FbPostBar: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Toolbar className="CToolbar" sx={{
        // backgroundColor: suveyData.positionDatas[
        //   suveyData.positionDatas.findIndex(val => { return val.position == '1' })
        // ].color,
        backgroundColor: '#ffffff',
        m: '0',
        p: '0',
        px: '0'
      }}>
        <Box sx={{ display: 'flex' }}>
          <Avatar alt={t('main.un')} src="./amberAvatar.jpg" />
        </Box>
        <Typography
          // variant="h8"
          noWrap
          component="div"
          color="black"
          sx={{
            marginLeft: '6px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'text'
          }}
        >
          {t('fb.t1')}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex' }}>
          <IconButton className="fb-sb-b" size="small" aria-label="show 4 new mails" color="inherit">
            <CollectionsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </>
  )
}

export const FbShortBar: FC = () => {
  return (
    <Box className="fb-short-row">
      <FbCreateShort />
      <FbShort1 />
      <FbShort2 />
    </Box >
  )
}

export const FbContent: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box className="fb-content" >
        <Box className="content-1">
          <Box className="row-1">
            <Box className="col">
              <Avatar alt={t('main.un')} src="./amberAvatar.jpg" />
            </Box>
            <Box className="col title">
              <Typography
                className="sub-name"
                noWrap
                component="div"
              >
                {t('fb.p1.name')}
              </Typography>
              <Typography
                className="sub-title"
                noWrap
                component="div"
              >
                {t('fb.p1.sub-title')}
              </Typography>
            </Box>
            <Box className="col-tool">
              <IconButton size="small" className="col-tool-moreicon" aria-label="show 4 new mails" color="inherit">
                <MoreHorizIcon />
              </IconButton>
              <IconButton size="small" className="col-tool-closeicon" aria-label="show 4 new mails" color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className="row-2">
            <Typography
              className="sub-text"
              component="div">
              {t('fb.p1.text')}
            </Typography>
          </Box>
          <img width="320px" src="./fb-content-cat.jpg" alt="picture" />
          <Box className="row-like">
            <Box className="col content-like">
              <RecommendIcon sx={{ fill: '#1976d2', verticalAlign: 'middle' }} />
              <Typography
                className="content-like-count"
                component="div">
                299
              </Typography>
            </Box>
            <Box className="col content-like-right">
              <Typography
                className="content-like-text"
                component="div">
                {t('fb.p1.like-text')}
              </Typography>
            </Box>
          </Box>
          <Box className="row-share">
            <Toolbar className="row-share-bar">
              <Box className="row-share-col">
                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                  <ThumbUpOutlinedIcon />
                </IconButton>
                <Typography
                  className="share-text"
                  component="div">
                  {t('fb.p1.like')}
                </Typography>
              </Box>
              <Box className="row-share-col">
                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <Typography
                  className="share-text"
                  component="div">
                  {t('fb.p1.comment')}
                </Typography>
              </Box>
              <Box className="row-share-col">
                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                  <ReplyOutlinedIcon />
                </IconButton>
                <Typography
                  className="share-text"
                  component="div">
                  {t('fb.p1.share')}
                </Typography>
              </Box>
            </Toolbar>
          </Box>
        </Box>
        <Box className="content-1">
          <Box className="row-1">
            <Box className="col">
              <Skeleton variant="circular" width={40} height={40} />
              {/* <Avatar alt={t("main.un")} src="./amberAvatar.jpg" /> */}
            </Box>
            <Box className="col title">
              <Typography
                className="sub-name"
                noWrap
                component="div"
              >
                <Skeleton width="39.49px" />
              </Typography>
              <Typography
                className="sub-title"
                noWrap
                component="div"
              >
                <Skeleton width="91.26px" />
              </Typography>
            </Box>
            <Box className="col-tool">
              <IconButton size="small" className="col-tool-moreicon" aria-label="show 4 new mails" color="inherit">
                <MoreHorizIcon />
              </IconButton>
              <IconButton size="small" className="col-tool-closeicon" aria-label="show 4 new mails" color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className="row-2">
            <Typography
              className="sub-text"
              component="div">
              <Skeleton />
            </Typography>
          </Box>
          {/* <img width="320px" src="./amberAvatar.jpg" alt="picture" /> */}
          <Skeleton variant="rectangular" width={340} height={150} />
          <Box className="row-share">
            <Toolbar className="row-share-bar">
              <Box className="row-share-col">
                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                  <ThumbUpOutlinedIcon />
                </IconButton>
                <Typography
                  className="share-text"
                  component="div">
                  {t('fb.p1.like')}
                </Typography>
              </Box>
              <Box className="row-share-col">
                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <Typography
                  className="share-text"
                  component="div">
                  {t('fb.p1.comment')}
                </Typography>
              </Box>
              <Box className="row-share-col">
                <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                  <ReplyOutlinedIcon />
                </IconButton>
                <Typography
                  className="share-text"
                  component="div">
                  {t('fb.p1.share')}
                </Typography>
              </Box>
            </Toolbar>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const FbNavigationBar: FC = () => {
  const [fbNavVal, setFbNavVal] = React.useState(0)

  return (
    <>
      <BottomNavigation
        showLabels
        value={fbNavVal}
        className="fb-nav-bar"
        onChange={(event, newValue) => {
          setFbNavVal(newValue)
        }}
      >
        <BottomNavigationAction className="nav-bar-col" icon={<HomeIcon />} />
        <BottomNavigationAction className="nav-bar-col" icon={<OndemandVideoOutlinedIcon />} />
        <BottomNavigationAction className="nav-bar-col" icon={<TourOutlinedIcon />} />
        <BottomNavigationAction className="nav-bar-col" icon={<AccountCircleOutlinedIcon />} />
        <BottomNavigationAction className="nav-bar-col" icon={<NotificationsNoneOutlinedIcon />} />
        <BottomNavigationAction className="nav-bar-col" icon={<MoreHorizIcon />} />
      </BottomNavigation>
    </>
  )
}
