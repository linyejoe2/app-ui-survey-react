import { AppBar } from '@mui/material'
import { FC } from 'react'
// import { Search } from "react-router-dom";

import { PhonePadding } from './PhonePadding'
import './Phone.css'
import { IPhoneHeight, ISurveyProps } from '../../interface'
import { BarSelector } from './BarSelector'
import { isIOS } from '../../service/services'
import { PhonePaddingOnFukIos } from './PhonePaddingOnFukIos'

// const searchBar = (surveyData: ISurveyData, position: TPosition): IpositionData | null => {
//   return surveyData.positionDatas ? surveyData.positionDatas[parseInt(position) - 1] ? surveyData.positionDatas[parseInt(position) - 1].enable ? surveyData.positionDatas[parseInt(position) - 1] : null : null : null
// }

export const Phone: FC<ISurveyProps> = (props: ISurveyProps) => {
  // const onIos = useMediaQuery("-webkit-touch-callout: none")
  const phoneHeight: IPhoneHeight = {
    beforeBody: isIOS() ? 0 : 44,
    body: 660,
    afterBody: isIOS() ? 109 : 29,
    beforeContent: true,
    firstBar: true
  }

  const phonePaddingProps = {
    notificationBarColor: '#ffffff',
    backgroundColor: '#ffffff',
    phoneHeight
  }

  const bars: JSX.Element[] = []

  // reverse after content
  let positionDatas = props.state.positionDatas
  let reverseIndex = 0
  for (let i = 0; i < positionDatas.length; i++) {
    if (positionDatas[i].name === 'content') {
      reverseIndex = i + 1
      break
    }
  }
  positionDatas = positionDatas.slice(0, reverseIndex).concat(positionDatas.slice(reverseIndex).reverse())

  for (const ele of positionDatas) {
    if (!ele.enable) continue

    if (ele.name === 'content') {
      phoneHeight.beforeContent = false
    }
    if (!ele.fixed) {
      bars.push(BarSelector(ele)[0])
    } else {
      bars.push(
        <AppBar position="absolute"
          key={ele.uid}
          sx={{
            maxWidth: '320px',
            left: isIOS() ? "auto" : '10px',
            top: phoneHeight.beforeContent
              ? phoneHeight.beforeBody.toString() + 'px'
              : (660 - (phoneHeight.afterBody + BarSelector(ele)[1])).toString() + 'px',
            // phoneHeight.afterBody.toString() + "px",
            boxShadow: 'none',
            backgroundColor: '#00000000',
            zIndex: 0
          }} >
          {BarSelector(ele)[0]}
        </AppBar>
      )
      // console.log(phoneHeight.afterBody)
      phoneHeight.beforeContent
        ? phoneHeight.beforeBody += BarSelector(ele)[1]
        : phoneHeight.afterBody += BarSelector(ele)[1]
    }

    // control Notification bar color
    if (phoneHeight.firstBar) {
      phonePaddingProps.notificationBarColor = BarSelector(ele)[2] ? BarSelector(ele)[2] : '#ffffff'
      phoneHeight.firstBar = false
    }
  }

  // caculate phoneContent height
  // phoneHeight.body = 660 - phoneHeight.beforeBody - (660 - phoneHeight.afterBody)
  phoneHeight.body = 660 - phoneHeight.beforeBody - phoneHeight.afterBody
  // console.log(JSON.stringify(phoneHeight))

  return (
    <>
      {/* {phoneHeight.body} */}
      {isIOS()
        ? <PhonePaddingOnFukIos {...phonePaddingProps}>
          {bars}
        </PhonePaddingOnFukIos>
        : <PhonePadding {...phonePaddingProps}>
          {bars}
        </PhonePadding>
      }
    </>)
}
