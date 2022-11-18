import './YouTube.css'

// icon
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

import { AppBar, Toolbar, Typography, Box, IconButton, Badge, Avatar, BottomNavigation, BottomNavigationAction } from "@mui/material"
import { FC } from "react"
import { IFCProps } from "../../../interface"
import { YTLogo } from './SearchBar/YtLogo';
import { useTranslation } from 'react-i18next';
import { YtConNavBar } from './ContentNavigationBar/YtConNavBar';
import { YTShort } from './Short/YTShort';
import React from 'react';

export const YTFirstRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="yt-first-row" >
      {props!.children}
    </AppBar>
  )
}

export const YTSecondRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="yt-secend-row">
      {props!.children}
    </AppBar>
  )
}

export const YTThirdRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <Box className="yt-third-row">
      {props!.children}
    </Box>
  )
}

export const YTFourthRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="yt-fourth-row">
      {props!.children}
    </AppBar>
  )
}

export const YTSearchBar: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Toolbar className="yt-search-bar" sx={{
        // backgroundColor: suveyData.positionDatas[
        //   suveyData.positionDatas.findIndex(val => { return val.position == '1' })
        // ].color,
      }}>
        <YTLogo />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex' }}>
          <IconButton className="yt-search-bar-button" size="small" color="inherit">
            <CastOutlinedIcon />
          </IconButton>
          <IconButton className="yt-search-bar-button" size="small" color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton className="yt-search-bar-button" size="small" color="inherit">
            <SearchIcon />
          </IconButton>
          <Avatar className="yt-search-bar-avatar" alt={t("main.un")} src="/randy.jpg" />
        </Box>
      </Toolbar>
    </>
  )
}

export const YTContentNavigationBar: FC = YtConNavBar

export const YTShortBar: FC = () => {
  return (
    <Box className="yt-short-bar">
      <YTShort />
    </Box >
  )
}

export const YTContent: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box className="yt-content">
        <Box className="yt-content-img">
          <img width="320px" src="/NationalTaipeiUni.jpg" alt="picture" />
        </Box>
        <Box className="yt-content-row">
          <Box className="yt-content-row1">
            <Typography
              noWrap
              className="yt-content-row1-text"
              component="div">
              {t("yt.p1.visit")}
            </Typography>
            <Box className="yt-content-row1-icon">
              <OpenInNewOutlinedIcon />
            </Box>
          </Box>
          <Box className="yt-content-row2">
            <Typography
              noWrap
              className="yt-content-row2-text"
              component="div">
              {t("yt.p1.title")}
            </Typography>
            <Box className="yt-content-row2-icon">
              <MoreIcon />
            </Box>
          </Box >
          <Box className="yt-content-row3">
            <Typography component="div" className="yt-content-row3-text">
              {t("yt.p1.text")}
            </Typography></Box>
          <Box className="yt-content-row4">
            <Typography
              noWrap
              className="yt-content-row4-text"
              component="div">
              {t("yt.p1.ads")}
            </Typography></Box></Box>
      </Box>
      <Box className="yt-content">
        <Box className="yt-content-img">
          <img width="320px" src="https://placekitten.com/640/360" alt="picture" />
        </Box>
        <Box className="yt-conten2-row-avatar">
          <Avatar className="yt-conten2-avatar" alt={t("main.un")} src="/amberAvatar.jpg" />
        </Box>
        <Box className="yt-content2-row">
          <Box className="yt-content2-row1">
            <Typography
              // noWrap
              className="yt-content2-row1-text"
              component="div">
              {t("yt.p2.title")}
            </Typography>
            <Box className="yt-content2-row1-icon">
              <MoreIcon />
            </Box>
          </Box >
          <Box className="yt-content2-row2">
            <Typography component="div" className="yt-content2-row2-text">
              {t("yt.p2.user")}
            </Typography></Box>
        </Box>
      </Box>
    </>
  )
}

export const YTNavigationBar: FC = () => {
  const { t } = useTranslation()
  const [fbNavVal, setFbNavVal] = React.useState(0);

  return (
    <>
      <BottomNavigation
        showLabels
        className='yt-nav-bar'
        value={fbNavVal}
        onChange={(event, newValue) => {
          setFbNavVal(newValue);
        }}
      >
        <BottomNavigationAction label={t("yt.n.home")} className="yt-nav-bar-button" icon={fbNavVal == 0 ? <HomeIcon /> : <HomeOutlinedIcon />} />
        <BottomNavigationAction label={t("yt.n.shorts")} className="yt-nav-bar-button" icon={fbNavVal == 1 ? <PlayCircleFilledWhiteIcon /> : <PlayCircleOutlineIcon />} />
        <BottomNavigationAction className="yt-nav-bar-button yt-nav-add-button" icon={<AddCircleOutlineOutlinedIcon />} />
        <BottomNavigationAction label={t("yt.n.subscription")} className="yt-nav-bar-button" icon={fbNavVal == 3 ? <SubscriptionsIcon /> : <SubscriptionsOutlinedIcon />} />
        <BottomNavigationAction label={t("yt.n.library")} className="yt-nav-bar-button" icon={fbNavVal == 4 ? <VideoLibraryIcon /> : <VideoLibraryOutlinedIcon />} />
      </BottomNavigation>
    </>
  )
}