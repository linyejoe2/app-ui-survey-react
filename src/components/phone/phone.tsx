import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem, Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton } from "@mui/material";
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
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import RecommendIcon from '@mui/icons-material/Recommend';
import CollectionsIcon from '@mui/icons-material/Collections';
import React from "react";
import { PhonePadding } from "./PhonePadding";
import "./Phone.css"
import { useTranslation } from "react-i18next";
import { Height } from "@mui/icons-material";

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

  const Content: FC = () => {
    return (
      <>
        <Grid container rowSpacing={1} className="fb-content" >
          <Grid xs={12} md={12} className="card">
            <Grid xs={12} md={12} className="row-1">
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
            </Grid>
            <Grid xs={12} md={12} className="row-1">
              <Typography
                className="sub-text"
                component="div">
                {t("fb.p1.text")}
              </Typography>
            </Grid>
          </Grid>
          <img width="320px" src="/S__162758683.jpg" alt="picture" />
          <Grid xs={12} md={12} className="card">
            <Grid xs={12} md={12} className="row-like">
              <Box className="col content-like">
                <RecommendIcon sx={{ fill: "#1976d2", verticalAlign: "middle" }} />
                <Typography
                  className="content-like-text"
                  component="div">
                  299
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid sx={{ marginTop: "10px" }} xs={12} md={12} className="card">
            <Grid xs={12} md={12} className="row-1">
              <Box className="col">
                {/* <Avatar alt={t("main.un")} src="/S__162758683.jpg" /> */}
                <Skeleton variant="circular" width={40} height={40} />
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
            </Grid>
            <Grid xs={12} md={12} className="row-1">
              <Typography
                className="sub-text"
                component="div">
                {t("fb.p1.text")}
              </Typography>
            </Grid>
          </Grid>
          <Skeleton variant="rectangular" width={340} height={150} />
          <Grid xs={12} md={12} className="card">
            <Grid xs={12} md={12} className="row-1">
            </Grid>
          </Grid>


        </Grid>
        {/* <Card className="fb-content-card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/S__162758683.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="fb-content-card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/S__162758683.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}

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
        <Content />
      </PhonePadding>
      {renderMobileMenu}
      {renderMenu}
    </>
  )
}