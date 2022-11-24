import "./Dcard.css"

import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StyleIcon from '@mui/icons-material/Style';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';


import { Box, Avatar, Typography, BottomNavigation, BottomNavigationAction, TextField, Badge, IconButton, Toolbar } from "@mui/material";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { FbContentDot } from "../Instagram/Content/dot";
import { IGShort } from "../Instagram/ShortBar/IGShort";
import { IGTitle } from "../Instagram/TitleBar/IGTitle";
import { YTLogo } from "../YouTube/SearchBar/YtLogo";

export const DcTitleBar: FC = () => {
  const { t } = useTranslation();
  return (
    <Box className='dc-first-row phone-row'>
      <Box className='dc-title-bar'>
        <input type="text" className="dc-title-input" placeholder={t("dc.t.text")} />
      </Box>
    </Box>
  )
}

export const DcFunctionBar: FC = () => {
  const [fbNavVal, setFbNavVal] = React.useState(0);
  const { t } = useTranslation();
  return (
    <Box className='dc-second-row phone-row'>
      <Box className='dc-function-bar'>
        <BottomNavigation
          showLabels
          value={fbNavVal}
          className="dc-nav-bar"
          onChange={(event, newValue) => {
            setFbNavVal(newValue);
          }}>
          <BottomNavigationAction className="nav-bar-col" label={t("dc.s.recommend")} />
          <BottomNavigationAction className="nav-bar-col" label={t("dc.s.all")} />
          <BottomNavigationAction className="nav-bar-col" label={t("dc.s.follow")} />
          <BottomNavigationAction className="nav-bar-col" label={t("dc.s.topic")} />
        </BottomNavigation>
      </Box>
    </Box>
  )
}

export const DcContent: FC = () => {
  const { t } = useTranslation()
  return (<>
    <Box className="dc-content">
      <Box className="dc-content-topic">
        <Avatar className="ig-content-title-avater" alt={t("main.un")} src="/amberAvatar.jpg" />
        <Typography >
          {t("dc.c1.topic")}
        </Typography>
        <Box className="ig-content-title-icon">
          <MoreIcon />
        </Box>
      </Box>
      <Box className="dc-content-item">
        <Box className="dc-content-text-box">
          <Box className="dc-content-title">
            <Typography>
              {t("dc.c1.title")}
            </Typography>
          </Box>
          <Box className="dc-content-text">
            <Typography>
              {t("dc.c1.text")}
            </Typography>
          </Box>
          <Box className="dc-content-like">
            <Typography>
              121 4 {t("dc.c1.store")}
            </Typography>
          </Box>
        </Box>
        <Box className="dc-content-img">
          <img width="320px" src="/NationalTaipeiUni.jpg" alt="picture" />
        </Box>
      </Box>
    </Box>
  </>)
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

export const DcNavigationBar: FC = () => {
  const { t } = useTranslation()
  const [fbNavVal, setFbNavVal] = React.useState(0);

  return (
    <>
      <Box className='dc-third-row phone-row'>
        <BottomNavigation
          showLabels
          className='ig-nav-bar'
          value={fbNavVal}
          onChange={(event, newValue) => {
            setFbNavVal(newValue);
          }}
        >
          <BottomNavigationAction className="ig-nav-bar-button" icon={<HomeIcon />} />
          <BottomNavigationAction className="ig-nav-bar-button" icon={<DashboardIcon />} />
          <BottomNavigationAction className="ig-nav-bar-button" icon={<StyleIcon />} />
          <BottomNavigationAction className="ig-nav-bar-button" icon={<ShoppingBagIcon />} />
          <BottomNavigationAction className="ig-nav-bar-button" icon={<NotificationsIcon />} />
          <BottomNavigationAction className="ig-nav-bar-button" icon={<DensityMediumIcon />} />
        </BottomNavigation>
      </Box>
    </>
  )
}