import "./FinishPage.css"
import { Phone } from '../../components/Phone/Phone'
import { useSelector } from 'react-redux'
import { RootState } from '../../service/store'
import { Box } from '@mui/system'
import { ISurveyData } from '../../interface'
import { gSurveyData2 } from '../../service/services'
import { Typography } from '@mui/material'
import { PieChart } from "react-minimal-pie-chart"
import { SurveyAnalyzer } from "../../service/SurveyAnalyzer"

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
  // const gSurveyData2 = useSelector((state: RootState) => state.gSurveyData2)
  // console.log(gSurveyData2)
  const gSurveyData2 = fakeData
  const surveyAnalyzer = new SurveyAnalyzer(gSurveyData2)
  const PieData = [
    { title: 'Facebook', value: surveyAnalyzer.barCount2.Facebook, color: '#1776ef' },
    { title: 'Instagram', value: surveyAnalyzer.barCount2.Instagram, color: 'url(#gradient1)' },
    { title: "YouTube", value: surveyAnalyzer.barCount2.YouTube, color: "#FF0000" },
    { title: 'Dcard', value: surveyAnalyzer.barCount2.Dcard, color: '#006aa6' }
  ]
  return (
    <Box className="finish-page">
      <Box className='resource-box '>
        <Typography className="finish-text">
          {"你最常用的是" + " " + gSurveyData2.defaultUI + " " + ",但也許你更喜歡" + " " + surveyAnalyzer.mostLikeUI.UIName + "！"}
        </Typography>
        <Typography className="finish-text">
          {"你總共用了" + " " + surveyAnalyzer.mostLikeUI.count + " " + "個" + " " + surveyAnalyzer.mostLikeUI.UIName + " " + "的元素！"}
        </Typography>
      </Box>
      <Box className="phone-box ">
        <Phone state={gSurveyData2} changeSurveyData={() => { }} />
      </Box>
      <Typography className="finish-text" sx={{ mt: 4 }}>
        圓餅圖
      </Typography>
      <Box className="pie-chart-box">
        <PieChart
          data={PieData}
          style={{ width: '300px' }}
          lineWidth={15}
          label={({ x, y, dx, dy, dataEntry }) => {
            if (dataEntry.value === 0) return
            return (
              <text
                x={x}
                y={y}
                dx={dx}
                dy={dy}
                dominantBaseline="central"
                textAnchor="middle"
                style={{
                  fontSize: '5px',
                  fontFamily: 'sans-serif',
                  fill: dataEntry.color
                }}
              >
                {dataEntry.title + ": " + Math.round(dataEntry.percentage) + '%'}
              </text>
            )
          }}
        // label={({ dataEntry }) => { if (dataEntry.value !== 0) return dataEntry.value }}
        // labelStyle={(id) => {
        //   const ele = PieData[id]
        //   return ({ fontSize: "10px", fill: ele.color })
        // }}
        // labelStyle={{
        //   fontSize: '10px',
        //   fontFamily: 'sans-serif',
        //   fill: '#E38627'
        // }}
        // paddingAngle={10}
        // viewBoxSize={[300, 300]}
        >
          <defs>
            {/* linear-gradient(225.54deg, #751BCF 22.06%, #B62586 48.32%, #EFAC59 69.89%); */}
            <linearGradient id="gradient1" gradientTransform="rotate(30)">
              <stop offset="0%" stopColor="#751BCF" />
              <stop offset="45%" stopColor="#B62586" />
              <stop offset="100%" stopColor="#EFAC59" />
            </linearGradient>
          </defs>
        </PieChart>
      </Box>
    </Box>
  )
}
