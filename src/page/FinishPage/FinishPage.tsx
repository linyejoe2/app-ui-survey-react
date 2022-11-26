import './FinishPage.css'
import { Phone } from '../../components/Phone/Phone'
import { useSelector } from 'react-redux'
import { RootState } from '../../service/store'
import { Box } from '@mui/system'
import { ISurveyData } from '../../interface'
import { gSurveyData2 } from '../../service/services'
import { Backdrop, CircularProgress, Fab, Typography } from '@mui/material'
import { PieChart } from 'react-minimal-pie-chart'
import { SurveyAnalyzer } from '../../service/SurveyAnalyzer'

import { lazy, Suspense } from 'react'
import React from 'react'
import { LoadingTP } from '../../components/LoadingTP'
import { useTranslation } from 'react-i18next'

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
  // const gSurveyData2 = fakeData
  const gSurveyData2 = useSelector((state: RootState) => state.gSurveyData2)
  // console.log(gSurveyData2)
  const { t } = useTranslation()
  const [loading, setLoading] = React.useState(true)
  const surveyAnalyzer = new SurveyAnalyzer(gSurveyData2)
  const pieData = [
    { title: 'Facebook', value: surveyAnalyzer.barCount2.Facebook, color: '#1776ef' },
    { title: 'Instagram', value: surveyAnalyzer.barCount2.Instagram, color: 'url(#gradient1)' },
    { title: 'YouTube', value: surveyAnalyzer.barCount2.YouTube, color: '#FF0000' },
    { title: 'Dcard', value: surveyAnalyzer.barCount2.Dcard, color: '#006aa6' }
  ]
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
            {t("f.res.same.t1") + ' ' + gSurveyData2.defaultUI + ' '} <br /> {t("f.res.same.t2") + ' ' + surveyAnalyzer.mostLikeUI.UIName + t("f.res.same.t3")}
          </Typography>
          <Typography className="finish-text">
            {t("f.res.same.t4") + ' ' + surveyAnalyzer.mostLikeUI.count + ' ' + t("f.res.same.t5") + ' ' + surveyAnalyzer.mostLikeUI.UIName + ' ' + t("f.res.same.t6")}
          </Typography>
          <Typography className="finish-text">
            {t("f.res.same.t7")}
          </Typography>
        </Box>
        : <Box className='resource-box '>
          <Typography className="finish-text">
            {t("f.res.n-same.t1") + ' ' + gSurveyData2.defaultUI + ' ' + t("f.res.n-same.t2") + ' ' + surveyAnalyzer.mostLikeUI.UIName + t("f.res.n-same.t3")}
          </Typography>
          <Typography className="finish-text">
            {t("f.res.n-same.t4") + ' ' + surveyAnalyzer.mostLikeUI.count + ' ' + t("f.res.n-same.t5") + ' ' + surveyAnalyzer.mostLikeUI.UIName + ' ' + t("f.res.n-same.t6")}
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
        Share this Test To Your Friend!
      </Typography>
      <Box className="share-button-group">
        <Fab variant="extended" color="primary" aria-label="share-facebook"
          sx={{
            backgroundColor: '1776ef'
          }}
          href="https://www.facebook.com/sharer.php?u=https://linyejoe2.github.io/app-ui-survey-react"
          target="fb"
        >
          Facebook
        </Fab>
        <Fab variant="extended" aria-label="share-line" sx={{ ml: 2, backgroundColor: '#1fc32e' }}
          href="http://line.naver.jp/R/msg/text/?https://linyejoe2.github.io/app-ui-survey-react"
          target="line">
          Line
        </Fab>
        <Fab variant="extended" sx={{ ml: 2 }}>
          Link
        </Fab>
        {/* <Fab disabled aria-label="like">
        </Fab> */}
      </Box>
      <Box sx={{ height: '200px' }} />
    </Box>
  )
}
