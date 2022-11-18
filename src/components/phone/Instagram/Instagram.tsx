import './Instagram.css'

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
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';


import { AppBar, Box, Toolbar, IconButton, Badge, Avatar, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IFCProps } from '../../../interface';
import { YtConNavBar } from '../YouTube/ContentNavigationBar/YtConNavBar';
import { YTLogo } from '../YouTube/SearchBar/YtLogo';
import { IGTitle } from './TitleBar/IGTitle';
import { IGShort } from './ShortBar/IGShort';
import { FbContentDot } from './Content/dot';


export const IGFirstRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="ig-first-row" >
      {props!.children}
    </AppBar>
  )
}

export const IGSecondRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="static" className="ig-secend-row">
      {props!.children}
    </AppBar>
  )
}

export const IGThirdRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <Box position="fixed" className="ig-third-row">
      {props!.children}
    </Box>
  )
}

export const IGTitleBar: FC = () => {
  const { t } = useTranslation();
  return (
    <Box className='ig-title-bar'>
      <IGTitle />
    </Box>
  )
}

export const IGShortBar: FC = () => {
  const { t } = useTranslation();
  return (
    <Box className='ig-short-bar' >
      <IGShort />
    </Box >
  )
}

export const IGContent: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box className="ig-content">
        <Box className="ig-content-title">
          <Box className="">
            <Avatar className="ig-content-title-avater" alt={t("main.un")} src="/amberAvatar.jpg" />
          </Box>
          <Typography
            noWrap
            className="ig-content-title-name"
            component="div">
            {t("ig.p1.name")}
          </Typography>
          <Box className="ig-content-title-icon">
            <MoreIcon />
          </Box>
        </Box>
        <Box className="ig-content-img">
          <img width="320px" src="https://placekitten.com/320/320" alt="picture" />
        </Box>
        <Box className="ig-content-btn-group">
          <Box className='ig-content-btn-left'>
            <Box className="ig-content-btn">
              <FavoriteBorderOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <ModeCommentOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <SendOutlinedIcon />
            </Box>
          </Box>
          <Box className="ig-content-dot">
            <FbContentDot />
          </Box>
          <Box className="ig-content-btn-right">
            <BookmarkBorderOutlinedIcon />
          </Box>
        </Box>
        <Box className="ig-content-like">
          <Typography
            noWrap
            className="ig-content-like-text"
            component="div">
            {t("ig.p1.likes")}
          </Typography>
        </Box >
        <Box className="ig-content-text">
          <Typography component="div" className="ig-content-text-name">
            {t("ig.p1.name") + " "}
          </Typography>
          <Typography component="div" className="ig-content-text-text">
            {t("ig.p1.text")}
          </Typography></Box>
        <Box className="ig-content-time">
          <Typography
            noWrap
            className="ig-content-time-text"
            component="div">
            {t("ig.p1.time")}
          </Typography></Box>
      </Box>
      <Box className="ig-content">
        <Box className="ig-content-title">
          <Box className="">
            <Avatar className="ig-content-title-avater" alt={t("main.un")} src="/amberAvatar.jpg" />
          </Box>
          <Typography
            noWrap
            className="ig-content-title-name"
            component="div">
            {t("ig.p1.name")}
          </Typography>
          <Box className="ig-content-title-icon">
            <MoreIcon />
          </Box>
        </Box>
        <Box className="ig-content-img">
          <img width="320px" src="https://placekitten.com/320/320" alt="picture" />
        </Box>
        <Box className="ig-content-btn-group">
          <Box className='ig-content-btn-left'>
            <Box className="ig-content-btn">
              <FavoriteBorderOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <ModeCommentOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <SendOutlinedIcon />
            </Box>
          </Box>
          <Box className="ig-content-dot">
            <FbContentDot />
          </Box>
          <Box className="ig-content-btn-right">
            <BookmarkBorderOutlinedIcon />
          </Box>
        </Box>
        <Box className="ig-content-like">
          <Typography
            noWrap
            className="ig-content-like-text"
            component="div">
            {t("ig.p1.likes")}
          </Typography>
        </Box >
        <Box className="ig-content-text">
          <Typography component="div" className="ig-content-text-name">
            {t("ig.p1.name") + " "}
          </Typography>
          <Typography component="div" className="ig-content-text-text">
            {t("ig.p1.text")}
          </Typography></Box>
        <Box className="ig-content-time">
          <Typography
            noWrap
            className="ig-content-time-text"
            component="div">
            {t("ig.p1.time")}
          </Typography></Box>
      </Box>
      <Box className="ig-content">
        <Box className="ig-content-title">
          <Box className="">
            <Avatar className="ig-content-title-avater" alt={t("main.un")} src="/amberAvatar.jpg" />
          </Box>
          <Typography
            noWrap
            className="ig-content-title-name"
            component="div">
            {t("ig.p1.name")}
          </Typography>
          <Box className="ig-content-title-icon">
            <MoreIcon />
          </Box>
        </Box>
        <Box className="ig-content-img">
          <img width="320px" src="https://placekitten.com/320/320" alt="picture" />
        </Box>
        <Box className="ig-content-btn-group">
          <Box className='ig-content-btn-left'>
            <Box className="ig-content-btn">
              <FavoriteBorderOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <ModeCommentOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <SendOutlinedIcon />
            </Box>
          </Box>
          <Box className="ig-content-dot">
            <FbContentDot />
          </Box>
          <Box className="ig-content-btn-right">
            <BookmarkBorderOutlinedIcon />
          </Box>
        </Box>
        <Box className="ig-content-like">
          <Typography
            noWrap
            className="ig-content-like-text"
            component="div">
            {t("ig.p1.likes")}
          </Typography>
        </Box >
        <Box className="ig-content-text">
          <Typography component="div" className="ig-content-text-name">
            {t("ig.p1.name") + " "}
          </Typography>
          <Typography component="div" className="ig-content-text-text">
            {t("ig.p1.text")}
          </Typography></Box>
        <Box className="ig-content-time">
          <Typography
            noWrap
            className="ig-content-time-text"
            component="div">
            {t("ig.p1.time")}
          </Typography></Box>
      </Box>
      <Box className="ig-content">
        <Box className="ig-content-title">
          <Box className="">
            <Avatar className="ig-content-title-avater" alt={t("main.un")} src="/amberAvatar.jpg" />
          </Box>
          <Typography
            noWrap
            className="ig-content-title-name"
            component="div">
            {t("ig.p1.name")}
          </Typography>
          <Box className="ig-content-title-icon">
            <MoreIcon />
          </Box>
        </Box>
        <Box className="ig-content-img">
          <img width="320px" src="https://placekitten.com/320/320" alt="picture" />
        </Box>
        <Box className="ig-content-btn-group">
          <Box className='ig-content-btn-left'>
            <Box className="ig-content-btn">
              <FavoriteBorderOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <ModeCommentOutlinedIcon />
            </Box>
            <Box className="ig-content-btn">
              <SendOutlinedIcon />
            </Box>
          </Box>
          <Box className="ig-content-dot">
            <FbContentDot />
          </Box>
          <Box className="ig-content-btn-right">
            <BookmarkBorderOutlinedIcon />
          </Box>
        </Box>
        <Box className="ig-content-like">
          <Typography
            noWrap
            className="ig-content-like-text"
            component="div">
            {t("ig.p1.likes")}
          </Typography>
        </Box >
        <Box className="ig-content-text">
          <Typography component="div" className="ig-content-text-name">
            {t("ig.p1.name") + " "}
          </Typography>
          <Typography component="div" className="ig-content-text-text">
            {t("ig.p1.text")}
          </Typography></Box>
        <Box className="ig-content-time">
          <Typography
            noWrap
            className="ig-content-time-text"
            component="div">
            {t("ig.p1.time")}
          </Typography></Box>
      </Box>
    </>
  )
}

export const IGNavigationBar: FC = () => {
  const { t } = useTranslation()
  const [fbNavVal, setFbNavVal] = React.useState(0);

  return (
    <>
      <BottomNavigation
        showLabels
        className='ig-nav-bar'
        value={fbNavVal}
        onChange={(event, newValue) => {
          setFbNavVal(newValue);
        }}
      >
        <BottomNavigationAction className="ig-nav-bar-button" icon={fbNavVal == 0 ? <HomeIcon /> : <HomeOutlinedIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={fbNavVal == 1 ? <SearchIcon /> : <SearchIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={fbNavVal == 2 ? <MovieIcon /> : <MovieOutlinedIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={fbNavVal == 3 ? <ShoppingBagIcon /> : <ShoppingBagOutlinedIcon />} />
        <BottomNavigationAction className="ig-nav-bar-button" icon={
          // <SubscriptionsOutlinedIcon />
          <Avatar className="ig-content-title-avater" alt={t("main.un")} src="/amberAvatar.jpg" />
        } />
      </BottomNavigation>
    </>
  )
}