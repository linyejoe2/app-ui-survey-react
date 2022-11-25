import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem, Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, BottomNavigationAction, BottomNavigation } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
// import { Search } from "react-router-dom";
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
import { FbCreateShort } from "./Facebook/Short/FbCreateShort";
import { FbShort1 } from "./Facebook/Short/FbShort1";
import { FbShort2 } from "./Facebook/Short/FbShort2";
import { FbSearchBar, FbPostBar, FbShortBar, FbNavigationBar, FbContent, FbFirstRow, FbSecondRow, FbThirdRow, FbFourthRow } from "./Facebook/Facebook";
import { YTContent, YTContentNavigationBar, YTFirstRow, YTFourthRow, YTNavigationBar, YTSearchBar, YTSecondRow, YTShortBar, YTThirdRow } from "./YouTube/YouTube";
import { IGContent, IGFirstRow, IGNavigationBar, IGSecondRow, IGShortBar, IGThirdRow, IGTitleBar } from "./Instagram/Instagram";
import { IpositionData, ISurveyData, ISurveyProps, TBar, TPosition, TPosition2, TSocialMedia } from "../../interface";

interface PostsProps {
  suveyData: ISurveyData
}

const searchBar = (surveyData: ISurveyData, position: TPosition): IpositionData | null => {
  console.log("search: " + (surveyData.positionDatas ? surveyData.positionDatas[parseInt(position) - 1] ? surveyData.positionDatas[parseInt(position) - 1].style : null : null))
  return surveyData.positionDatas ? surveyData.positionDatas[parseInt(position) - 1] ? surveyData.positionDatas[parseInt(position) - 1] : null : null
}

/**
 * 用 positionDatas.position 的查法
 */
const searchBar3 = (surveyData: ISurveyData, position: TPosition): IpositionData | null => {
  for (let ele of surveyData.positionDatas) {
    if (ele.position == position) return ele
  }
  return null
}

/**
 * 用 UIStyle 的查法
 */
const searchBar2 = (surveyData: ISurveyData, position: TPosition2): { bar: TBar, style: TSocialMedia } | null => {
  if (!surveyData.UIStyle || [...surveyData.UIStyle!.entries()].length <= 0) return null
  for (let ele of surveyData.UIStyle.entries()) {
    if (ele[1].Position == position) return { bar: ele[0], style: ele[1].Style }
  }
  return null
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

export const Phone: FC<ISurveyProps> = (props: ISurveyProps) => {
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

  const FirstRow: FC = () => {
    let bar = searchBar(props.state, "1")
    if (bar?.style == "Facebook") {
      return (
        <FbFirstRow >
          <FbSearchBar />
        </FbFirstRow>
      )
    } else if (bar?.style == "Instagram") {
      return (
        <IGFirstRow>
          <IGTitleBar />
        </IGFirstRow>
      )
    } else if (bar?.style == "YouTube") {
      return (
        <YTFirstRow>
          <YTSearchBar />
        </YTFirstRow>
      )
    } else {
      return (
        <></>
      )
    }
  }

  const SecondRow: FC = () => {
    let bar = searchBar(props.state, "2")
    if (bar?.style == "Facebook") {
      return (
        <FbSecondRow>
          <FbPostBar />
        </FbSecondRow>
      )
    } else if (bar?.style == "Instagram") {
      return (
        <IGSecondRow>
          <IGShortBar />
        </IGSecondRow>
      )
    } else if (bar?.style == "YouTube") {
      return (
        <YTSecondRow>
          <YTContentNavigationBar />
        </YTSecondRow>
      )
    } else {
      return (
        <></>
      )
    }
  }
  const ThirdRow: FC = () => {
    let bar = searchBar(props.state, "3")
    if (bar?.style == "Facebook") {
      return (
        <FbThirdRow>
          <FbShortBar />
        </FbThirdRow>
      )
    } else if (bar?.style == "Instagram") {
      return (
        <IGThirdRow>
          <IGNavigationBar />
        </IGThirdRow>
      )
    } else if (bar?.style == "YouTube") {
      return (
        <YTThirdRow>
          <YTShortBar />
        </YTThirdRow>
      )
    } else {
      return (
        <></>
      )
    }
  }

  const Content: FC = () => {
    let bar = searchBar(props.state, "4")
    if (bar?.style == "Facebook") {
      return <FbContent />
    } else if (bar?.style == "Instagram") {
      return <IGContent />
    } else if (bar?.style == "YouTube") {
      return <YTContent />
    } else {
      return (
        <></>
      )
    }
  }

  const FourthRow: FC = () => {
    let bar = searchBar(props.state, "4")
    if (bar?.style == "Facebook") {
      return (
        <FbFourthRow>
          <FbNavigationBar />
        </FbFourthRow>
      )
    } else if (bar?.style == "YouTube") {
      return (
        <YTFourthRow>
          <YTNavigationBar />
        </YTFourthRow>
      )
    } else {
      return (
        <></>
      )
    }
  }

  // FB
  return (
    <>
      <PhonePadding color="#ffffff">
        <FirstRow />
        <SecondRow />
        <Content />
        <ThirdRow />
        <FourthRow />
      </PhonePadding>
    </>
  )
}