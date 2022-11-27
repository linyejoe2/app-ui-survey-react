import { ISurveyData } from '../interface'
import { getTime } from './services'

export default class {
  data: any[] = []
  date: string
  user: string
  gender: string
  age: string
  defaultUI: string
  theme: string
  themeMode: string
  titleBarPosition: string
  titleBarStyle: string
  functionBarPosition: string
  functionBarStyle: string
  shortBarPosition: string
  shortBarStyle: string
  contentPosition: string
  contentStyle: string
  navigationBarPosition: string
  navigationBarStyle: string

  constructor(surveyData: ISurveyData) {
    this.data.push(getTime())
    this.data.push('Randy Lin')
    this.data.push(surveyData.gender)
    this.data.push(surveyData.age)
    this.data.push(surveyData.defaultUI)
    this.data.push(surveyData.themeStyle)
    this.data.push(surveyData.themeMode)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'titleBar')[0].position)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'titleBar')[0].style)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'functionBar')[0].position)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'functionBar')[0].style)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'shortBar')[0].position)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'shortBar')[0].style)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'content')[0].position)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'content')[0].style)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'navigationBar')[0].position)
    this.data.push(surveyData.positionDatas.filter(ele => ele.name === 'navigationBar')[0].style)

    this.date = getTime()
    this.user = 'Randy Lin'
    this.gender = surveyData.gender
    this.age = surveyData.age
    this.defaultUI = surveyData.defaultUI
    this.theme = surveyData.themeStyle
    this.themeMode = surveyData.themeMode
    this.titleBarPosition = surveyData.positionDatas.filter(ele => ele.name === 'titleBar')[0].position
    this.titleBarStyle = surveyData.positionDatas.filter(ele => ele.name === 'titleBar')[0].style
    this.functionBarPosition = surveyData.positionDatas.filter(ele => ele.name === 'functionBar')[0].position
    this.functionBarStyle = surveyData.positionDatas.filter(ele => ele.name === 'functionBar')[0].style
    this.shortBarPosition = surveyData.positionDatas.filter(ele => ele.name === 'shortBar')[0].position
    this.shortBarStyle = surveyData.positionDatas.filter(ele => ele.name === 'shortBar')[0].style
    this.contentPosition = surveyData.positionDatas.filter(ele => ele.name === 'content')[0].position
    this.contentStyle = surveyData.positionDatas.filter(ele => ele.name === 'content')[0].style
    this.navigationBarPosition = surveyData.positionDatas.filter(ele => ele.name === 'navigationBar')[0].position
    this.navigationBarStyle = surveyData.positionDatas.filter(ele => ele.name === 'navigationBar')[0].style
  }
}
