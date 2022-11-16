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
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';

import { AppBar, Toolbar, Typography, Box, IconButton, Badge, Avatar } from "@mui/material"
import { FC } from "react"
import { IFCProps } from "../../../interface"
import { YTLogo } from './SearchBar/YtLogo';
import { useTranslation } from 'react-i18next';
import { YtConNavBar } from './ContentNavigationBar/YtConNavBar';

export const YTFirstRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="yt-first-bar" >
      {props!.children}
    </AppBar>
  )
}

export const YTSecondRow: FC<IFCProps> = (props: IFCProps) => {
  return (
    <AppBar position="fixed" className="yt-secend-bar">
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

export const YTContent: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box className="yt-content">
        <img width="320px" src="/NationalTaipeiUni.jpg" alt="picture" />
        <Box className="yt-content-row">
          <Box className="yt-content-row1">
            <Typography
              noWrap
              component="div">
              {t("yt.p1.visit")}
            </Typography>
          </Box>
          <Box className="yt-content-row2">
            <Typography
              noWrap
              component="div">
              {t("yt.p1.title")}
            </Typography>
          </Box >
          <Box className="yt-content-row3">
            <Typography component="div">
              {t("yt.p1.text")}
            </Typography></Box>
          <Box className="yt-content-row4">
            <Typography
              noWrap
              component="div">
              {t("yt.p1.ads")}
            </Typography></Box></Box>
      </Box>
    </>
  )
}