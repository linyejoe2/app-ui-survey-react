import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem, Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, BottomNavigationAction, BottomNavigation } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
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
import { LayoutProps, PhonePadding } from "./PhonePadding";
import "./Phone.css"
import { useTranslation } from "react-i18next";
import { Height } from "@mui/icons-material";
import { FbCreateShort } from "./Facebook/Short/FbCreateShort";
import { FbShort1 } from "./Facebook/Short/FbShort1";
import { FbShort2 } from "./Facebook/Short/FbShort2";
import { FbSearchBar, FbPostBar, FbShortBar, FbNavigationBar, FbContent, FbFirstRow, FbSecondRow, FbThirdRow, FbFourthRow } from "./Facebook/Facebook";
import { YTContent, YTContentNavigationBar, YTFirstRow, YTFourthRow, YTNavigationBar, YTSearchBar, YTSecondRow, YTShortBar, YTThirdRow } from "./YouTube/YouTube";
import { IGContent, IGFirstRow, IGNavigationBar, IGSecondRow, IGShortBar, IGThirdRow, IGTitleBar } from "./Instagram/Instagram";
import { IPhoneHeight, IpositionData, ISurveyData, ISurveyProps, TBar, TPosition, TPosition2, TSocialMedia } from "../../interface";
import { BarSelector } from "./BarSelector";
import { DcContent, DcFunctionBar, DcNavigationBar, DcTitleBar } from "./Dcard/Dcard";

const searchBar = (surveyData: ISurveyData, position: TPosition): IpositionData | null => {
  return surveyData.positionDatas ? surveyData.positionDatas[parseInt(position) - 1] ? surveyData.positionDatas[parseInt(position) - 1].enable ? surveyData.positionDatas[parseInt(position) - 1] : null : null : null
}

export const Phone: FC<ISurveyProps> = (props: ISurveyProps) => {

  const phoneHeight: IPhoneHeight = {
    beforeBody: 44,
    body: 660,
    afterBody: 29,
    beforeContent: true,
    firstBar: true
  }

  const phonePaddingProps = {
    notificationBarColor: "#ffffff",
    backgroundColor: "#ffffff",
    phoneHeight
  }

  let bars: JSX.Element[] = []

  // reverse after content
  let positionDatas = props.state.positionDatas!
  let reverseIndex = 0
  for (let i = 0; i < positionDatas.length; i++) {
    if (positionDatas[i].name == "content") {
      reverseIndex = i + 1
      break
    }
  }
  positionDatas = positionDatas.slice(0, reverseIndex).concat(positionDatas.slice(reverseIndex).reverse())

  for (let ele of positionDatas) {
    if (!ele.enable) continue

    if (ele.name == "content") {
      phoneHeight.beforeContent = false
    }
    if (!ele.fixed) {
      bars.push(BarSelector(ele)[0])
    } else {
      bars.push(
        <AppBar position="fixed"
          key={ele.uid}
          sx={{
            maxWidth: "320px",
            left: "10px",
            top: phoneHeight.beforeContent ?
              phoneHeight.beforeBody.toString() + "px" :
              (660 - (phoneHeight.afterBody + BarSelector(ele)[1])).toString() + "px",
            // phoneHeight.afterBody.toString() + "px",
            boxShadow: 'none',
            backgroundColor: "#00000000"

          }} >
          {BarSelector(ele)[0]}
        </AppBar>
      )
      // console.log(phoneHeight.afterBody)
      phoneHeight.beforeContent ?
        phoneHeight.beforeBody += BarSelector(ele)[1] :
        phoneHeight.afterBody += BarSelector(ele)[1]
    }

    // control Notification bar color
    if (phoneHeight.firstBar) {
      phonePaddingProps.notificationBarColor = BarSelector(ele)[2] ? BarSelector(ele)[2] : "#ffffff"
      phoneHeight.firstBar = false
    }
  }

  // caculate phoneContent height
  // phoneHeight.body = 660 - phoneHeight.beforeBody - (660 - phoneHeight.afterBody)
  phoneHeight.body = 660 - phoneHeight.beforeBody - phoneHeight.afterBody
  console.log(JSON.stringify(phoneHeight))

  return (
    <>
      {/* {phoneHeight.body} */}
      <PhonePadding {...phonePaddingProps}>
        {bars}
      </PhonePadding>
    </>)

  const FirstRow: FC = () => {
    return (<DcTitleBar></DcTitleBar>)
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
    return (<DcFunctionBar />)
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
    return <DcContent />
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
    return <DcNavigationBar />
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
  // return (
  //   <>
  //     <PhonePadding color="#ffffff">
  //       <FirstRow />
  //       <SecondRow />
  //       <Content />
  //       <ThirdRow />
  //       <FourthRow />
  //     </PhonePadding>
  //   </>
  // )
}