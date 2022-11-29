import { AppBar } from '@mui/material'
import { FC } from 'react'
// import { Search } from "react-router-dom";

import { PhonePadding } from './PhonePadding'
import './Phone.css'
import { IPhoneHeight, IpositionData, ISurveyProps } from '../../interface'
import { BarSelector } from './BarSelector'
import { isIOS } from '../../service/services'
import { PhonePaddingOnFukIos } from './PhonePaddingOnFukIos'

// const searchBar = (surveyData: ISurveyData, position: TPosition): IpositionData | null => {
//   return surveyData.positionDatas ? surveyData.positionDatas[parseInt(position) - 1] ? surveyData.positionDatas[parseInt(position) - 1].enable ? surveyData.positionDatas[parseInt(position) - 1] : null : null : null
// }

export const Phone: FC<ISurveyProps> = (props: ISurveyProps) => {
  const phoneHeight: IPhoneHeight = {
    beforeBody: isIOS() ? 0 : 44,
    body: 660,
    afterBody: isIOS() ? 109 : 29,
    beforeContent: true,
    firstBar: true
    // lestBar: false
  }

  const phonePaddingProps = {
    notificationBarColor: '#ffffff',
    bottomBarColor: "#ffffff",
    backgroundColor: '#ffffff',
    phoneHeight
  }

  const bars: JSX.Element[] = [] // store bars element
  const positionDatas = props.state.positionDatas // store bars data
  const positionDataWhenBeforeContent: IpositionData[] = []

  for (const ele of positionDatas) {
    // 1. not enable
    if (!ele.enable) continue

    // 2. check if is before content
    if (ele.name === 'content') {
      phoneHeight.beforeContent = false
    }

    // 3. check if is fixed
    if (!ele.fixed) {
      // if isn't fix, directory push it into arr
      bars.push(BarSelector(ele)[0])
    } else {
      // if is fix, check before content or not.
      if (phoneHeight.beforeContent) {
        bars.push(
          <AppBar position="absolute"
            key={ele.uid}
            sx={{
              maxWidth: '320px',
              left: isIOS() ? 'auto' : '10px',
              top: phoneHeight.beforeBody.toString() + 'px',
              boxShadow: 'none',
              backgroundColor: '#00000000',
              zIndex: 0
            }} >
            {BarSelector(ele)[0]}
          </AppBar>
        )
      } else {
        // whan is before content, we need to reverse arr to render from bottom.
        // store those ele to a array, insert then later.
        positionDataWhenBeforeContent.unshift(ele)
        continue
      }

      // 4. caculate the offset of content.
      phoneHeight.beforeBody += BarSelector(ele)[1]
      // phoneHeight.beforeContent
      //   ? phoneHeight.beforeBody += BarSelector(ele)[1]
      //   : phoneHeight.afterBody += BarSelector(ele)[1]
    }

    // 5. control Notification bar color
    // if (phoneHeight.firstBar) {
    //   phonePaddingProps.notificationBarColor = BarSelector(ele)[2] ? BarSelector(ele)[2] : '#ffffff'
    //   phoneHeight.firstBar = false
    // }
  }

  /**
   * 6. add ele who are before content and is fixed,
   * because then need to render from bottom.
   */
  for (const ele of positionDataWhenBeforeContent) {
    bars.push(
      <AppBar position="absolute"
        key={ele.uid}
        sx={{
          maxWidth: '320px',
          left: isIOS() ? 'auto' : '10px',
          top: (660 - (phoneHeight.afterBody + BarSelector(ele)[1])).toString() + 'px',
          boxShadow: 'none',
          backgroundColor: '#00000000',
          zIndex: 0
        }} >
        {BarSelector(ele)[0]}
      </AppBar>
    )

    // 7. caculate the height of content.
    phoneHeight.afterBody += BarSelector(ele)[1]

    // 5. control Notification bar color
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
