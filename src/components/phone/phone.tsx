import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem, Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, BottomNavigationAction, BottomNavigation } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
// import { Search } from "react-router-dom";
import { IsurveyData } from "../../page/Survey/Survey"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
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
import React from "react";
import { PhonePadding } from "./PhonePadding";
import "./Phone.css"
import { useTranslation } from "react-i18next";
import { Height } from "@mui/icons-material";
import { FbCreateShort } from "./FbShort/FbCreateShort";
import { FbShort1 } from "./FbShort/FbShort1";
import { FbShort2 } from "./FbShort/FbShort2";

interface PostsProps {
  suveyData: IsurveyData
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Phone: FC<PostsProps> = ({ suveyData }) => {
  const { t } = useTranslation();
  const [fbNavVal, setFbNavVal] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const Short: FC = () => {
    return (
      <Box className="fb-short">
        <Box className="fb-short-row">
          <FbCreateShort />
          <FbShort1 />
          <FbShort2 />
          {/* <Box className="fb-short-col fb-short-col-1">
            <img width="320px" src="
        https://placekitten.com/200/300" alt="picture" />
            <Avatar alt={t("fb.s.s1")} src="/S__162758683.jpg" />
            <Typography
              component="div">
              {t("fb.s.s1")}
            </Typography>
          </Box> */}
        </Box >
      </Box>
    )
  }

  const Content: FC = () => {
    return (
      <>
        <Box className="fb-content" >
          <Box className="content-1">
            <Box className="row-1">
              <Box className="col">
                <Avatar alt={t("main.un")} src="/S__162758683.jpg" />
              </Box>
              <Box className="col title">
                <Typography
                  className="sub-name"
                  noWrap
                  component="div"
                >
                  {t("fb.p1.name")}
                </Typography>
                <Typography
                  className="sub-title"
                  noWrap
                  component="div"
                >
                  {t("fb.p1.sub-title")}
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
                {t("fb.p1.text")}
              </Typography>
            </Box>
            <img width="320px" src="/S__162758683.jpg" alt="picture" />
            <Box className="row-like">
              <Box className="col content-like">
                <RecommendIcon sx={{ fill: "#1976d2", verticalAlign: "middle" }} />
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
                  {t("fb.p1.like-text")}
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
                    {t("fb.p1.like")}
                  </Typography>
                </Box>
                <Box className="row-share-col">
                  <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <Typography
                    className="share-text"
                    component="div">
                    {t("fb.p1.comment")}
                  </Typography>
                </Box>
                <Box className="row-share-col">
                  <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                    <ReplyOutlinedIcon />
                  </IconButton>
                  <Typography
                    className="share-text"
                    component="div">
                    {t("fb.p1.share")}
                  </Typography>
                </Box>
              </Toolbar>
            </Box>
          </Box>
          <Box className="content-1">
            <Box className="row-1">
              <Box className="col">
                <Skeleton variant="circular" width={40} height={40} />
                {/* <Avatar alt={t("main.un")} src="/S__162758683.jpg" /> */}
              </Box>
              <Box className="col title">
                <Typography
                  className="sub-name"
                  noWrap
                  component="div"
                >
                  {t("fb.p1.name")}
                </Typography>
                <Typography
                  className="sub-title"
                  noWrap
                  component="div"
                >
                  {t("fb.p1.sub-title")}
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
                {t("fb.p1.text")}
              </Typography>
            </Box>
            {/* <img width="320px" src="/S__162758683.jpg" alt="picture" /> */}
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
                    {t("fb.p1.like")}
                  </Typography>
                </Box>
                <Box className="row-share-col">
                  <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <Typography
                    className="share-text"
                    component="div">
                    {t("fb.p1.comment")}
                  </Typography>
                </Box>
                <Box className="row-share-col">
                  <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                    <ReplyOutlinedIcon />
                  </IconButton>
                  <Typography
                    className="share-text"
                    component="div">
                    {t("fb.p1.share")}
                  </Typography>
                </Box>
              </Toolbar>
            </Box>
          </Box>
        </Box>
      </>)
  }

  // FB
  return (
    <>
      <PhonePadding color={
        suveyData.positionDatas[
          suveyData.positionDatas.findIndex(val => { return val.position == '1' })
        ].color}>
        <AppBar position="fixed" className="fb-first-bar" >
          <Toolbar className="CToolbar" sx={{
            backgroundColor: suveyData.positionDatas[
              suveyData.positionDatas.findIndex(val => { return val.position == '1' })
            ].color,
            m: '0',
            p: "0",
            px: "0"
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
        </AppBar>
        <AppBar position="static" className="fb-secend-bar">
          <Toolbar className="CToolbar" sx={{
            backgroundColor: suveyData.positionDatas[
              suveyData.positionDatas.findIndex(val => { return val.position == '1' })
            ].color,
            m: '0',
            p: "0",
            px: "0"
          }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar alt={t("main.un")} src="/S__162758683.jpg" />
            </Box>
            <Typography
              // variant="h8"
              noWrap
              component="div"
              color="black"
              sx={{
                marginLeft: "6px",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "text"
              }}
            >
              {t("fb.t1")}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex' }}>
              <IconButton className="fb-sb-b" size="small" aria-label="show 4 new mails" color="inherit">
                <CollectionsIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Short />
        <Content />
        <AppBar position="fixed" className="fb-last-bar">
          <BottomNavigation
            showLabels
            value={fbNavVal}
            onChange={(event, newValue) => {
              setFbNavVal(newValue);
            }}
          >
            <BottomNavigationAction className="nav-bar-col nav-bar-first-col" icon={<HomeIcon />} />
            <BottomNavigationAction className="nav-bar-col" icon={<OndemandVideoOutlinedIcon />} />
            <BottomNavigationAction className="nav-bar-col" icon={<TourOutlinedIcon />} />
            <BottomNavigationAction className="nav-bar-col" icon={<AccountCircleOutlinedIcon />} />
            <BottomNavigationAction className="nav-bar-col" icon={<NotificationsNoneOutlinedIcon />} />
            <BottomNavigationAction className="nav-bar-col" icon={<MoreHorizIcon />} />
          </BottomNavigation>
        </AppBar>
      </PhonePadding>
      {renderMobileMenu}
      {renderMenu}
    </>
  )
}