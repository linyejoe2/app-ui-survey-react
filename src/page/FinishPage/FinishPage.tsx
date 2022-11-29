import './FinishPage.css'
import { Phone } from '../../components/Phone/Phone'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../service/store'
import { Box } from '@mui/system'
import { ISurveyData } from '../../interface'
import { Fab, Typography } from '@mui/material'
import { SurveyAnalyzer } from '../../service/SurveyAnalyzer'

import React, { lazy, Suspense, useEffect } from 'react'

import { LoadingTP } from '../../components/LoadingTP'
import { useTranslation } from 'react-i18next'
import TransferSurveyData from '../../service/TransferSurveyData'

const CustomPieChart = lazy(() => import('../../components/FinishPage/CustomPieChart'))
// import CustomPieChart from '../../components/FinishPage/CustomPieChart'

const fakeData: ISurveyData = {
  user: '',
  gender: 'male',
  age: '0',
  defaultUI: 'Facebook',
  themeStyle: 'YouTube',
  themeMode: 'light',
  UIStyle: undefined,
  positionDatas: [
    { uid: '1', name: 'titleBar', position: '1', enable: true, style: 'Instagram', fixed: true },
    { uid: '2', name: 'functionBar', position: '2', enable: false, style: 'Facebook', fixed: false },
    { uid: '3', name: 'shortBar', position: '3', enable: true, style: 'Instagram', fixed: false },
    { uid: '4', name: 'content', position: '4', enable: true, style: 'Instagram', fixed: false },
    { uid: '5', name: 'navigationBar', position: '5', enable: true, style: 'Instagram', fixed: true }
  ]
}

export const FinishPage = () => {
  const gSurveyData2 = fakeData
  // const gSurveyData2 = useSelector((state: RootState) => state.gSurveyData2)
  if (gSurveyData2.defaultUI === '') {
    window.document.location.href = './'
    return <></>
  }
  // console.log(gSurveyData2)
  const { t } = useTranslation()
  const [loading, setLoading] = React.useState(true)
  const surveyAnalyzer = new SurveyAnalyzer(gSurveyData2)
  const pieData = [
    { title: 'Facebook', value: surveyAnalyzer.barCount2.Facebook, color: '#1776ef' },
    { title: 'Instagram', value: surveyAnalyzer.barCount2.Instagram, color: 'url(#gradient1)' },
    { title: 'YouTube', value: surveyAnalyzer.barCount2.YouTube, color: '#FF0000' },
    { title: 'Dcard', value: surveyAnalyzer.barCount2.Dcard, color: '#006aa6' },
    { title: t('f.res.unused'), value: surveyAnalyzer.barCount2.unused, color: '#777' }
  ]

  let wellcome = true
  useEffect(() => {
    if (!wellcome) return
    wellcome = false;
    (() => {
      // eslint-disable-next-line no-undef
      const requestOptions: RequestInit = {
        redirect: 'follow',
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(new TransferSurveyData(gSurveyData2))
      }
      fetch('https://script.google.com/macros/s/AKfycbz72nXTClVVFzadkVjjvAk2Ci7ixF8xpFkZuZutm0bYra_GeS2SZMlp8ztcfGZC2nXqtg/exec', requestOptions)
        .then(response => response.text())
        .then(json => {
          console.log(json)
          // response.json()
        })
    })()
  }, [])

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    return <LoadingTP />
  }

  return (
    <Box className="finish-page">
      {gSurveyData2.defaultUI === surveyAnalyzer.mostLikeUI.UIName
        ? <Box className='resource-box '>
          <Typography className="finish-text">
            {t('f.res.same.t1') + ' ' + gSurveyData2.defaultUI + ' '} <br /> {t('f.res.same.t2') + ' ' + surveyAnalyzer.mostLikeUI.UIName + t('f.res.same.t3')}
          </Typography>
          <Typography className="finish-text">
            {t('f.res.same.t4') + ' ' + surveyAnalyzer.mostLikeUI.count + ' ' + t('f.res.same.t5') + ' ' + surveyAnalyzer.mostLikeUI.UIName + ' ' + t('f.res.same.t6')}
          </Typography>
          <Typography className="finish-text">
            {t('f.res.same.t7')}
          </Typography>
        </Box>
        : <Box className='resource-box '>
          <Typography className="finish-text">
            {t('f.res.n-same.t1') + ' ' + gSurveyData2.defaultUI + ' ' + t('f.res.n-same.t2') + ' ' + surveyAnalyzer.mostLikeUI.UIName + t('f.res.n-same.t3')}
          </Typography>
          <Typography className="finish-text">
            {t('f.res.n-same.t4') + ' ' + surveyAnalyzer.mostLikeUI.count + ' ' + t('f.res.n-same.t5') + ' ' + surveyAnalyzer.mostLikeUI.UIName + ' ' + t('f.res.n-same.t6')}
          </Typography>
        </Box>
      }
      <Box className="phone-box ">
        <Phone state={gSurveyData2} changeSurveyData={() => { }} />
      </Box>
      {/* <Typography className="finish-text" sx={{ mt: 4 }}>
        圓餅圖
      </Typography> */}
      <Suspense>
        <Box className="pie-chart-box">
          <CustomPieChart pieData={pieData} />
        </Box>
      </Suspense>
      <Typography className="finish-text" sx={{ mt: 4, mb: 2 }}>
        {t('f.res.share.t')}
      </Typography>
      <Box className="share-button-group">
        <Fab variant="extended" aria-label="share-facebook"
          href="https://www.facebook.com/sharer.php?u=https://linyejoe2.github.io/app-ui-survey-react"
          target="fb"
        >
          <img src="./icon/facebook-black.svg" style={{ height: '48px' }} />
          {/* Facebook */}
        </Fab>
        <Fab variant="extended" aria-label="share-line" sx={{ ml: 2 }}
          href="http://line.naver.jp/R/msg/text/?https://linyejoe2.github.io/app-ui-survey-react?openExternalBrowser=1"
          target="line">
          <img src="./icon/line-black.svg" style={{ height: '48px' }} />
          {/* Line */}
        </Fab>
        <Fab variant="extended" aria-label="share-telegram"
          sx={{
            ml: 2
          }}
          href="https://t.me/share/url?url={https://linyejoe2.github.io/app-ui-survey-react}&text={選擇你最喜歡的社群媒體外觀吧！}"
          target="msg"
        >
          <img src="./icon/telegram-black.svg" style={{ height: '48px' }} />
          {/* Telegram */}
        </Fab>
        <Fab variant="extended" sx={{ ml: 2 }}>
          <img src="./icon/link-black.svg" style={{ height: '48px' }} />
          {/* Link */}
        </Fab>
        {/* <Fab disabled aria-label="like">
        </Fab> */}
      </Box>
      <Box sx={{ height: '200px' }} />
    </Box>
  )
}
