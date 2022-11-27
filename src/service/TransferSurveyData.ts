import { barSteteSelector } from '../components/Phone/BarSelector'
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
    this.data.push('')
    this.data.push(surveyData.gender)
    this.data.push(surveyData.age)
    this.data.push(surveyData.defaultUI)
    this.data.push(surveyData.themeStyle)
    this.data.push(surveyData.themeMode)
    this.data.push(barSteteSelector(surveyData, 'titleBar').Position)
    this.data.push(barSteteSelector(surveyData, 'titleBar').Style)
    this.data.push(barSteteSelector(surveyData, 'functionBar').Position)
    this.data.push(barSteteSelector(surveyData, 'functionBar').Style)
    this.data.push(barSteteSelector(surveyData, 'shortBar').Position)
    this.data.push(barSteteSelector(surveyData, 'shortBar').Style)
    this.data.push(barSteteSelector(surveyData, 'content').Position)
    this.data.push(barSteteSelector(surveyData, 'content').Style)
    this.data.push(barSteteSelector(surveyData, 'navigationBar').Position)
    this.data.push(barSteteSelector(surveyData, 'navigationBar').Style)

    this.date = getTime()
    this.user = 'Randy Lin'
    this.gender = surveyData.gender
    this.age = surveyData.age
    this.defaultUI = surveyData.defaultUI
    this.theme = surveyData.themeStyle
    this.themeMode = surveyData.themeMode
    this.titleBarPosition = barSteteSelector(surveyData, 'titleBar').Position
    this.titleBarStyle = barSteteSelector(surveyData, 'titleBar').Style
    this.functionBarPosition = barSteteSelector(surveyData, 'functionBar').Position
    this.functionBarStyle = barSteteSelector(surveyData, 'functionBar').Style
    this.shortBarPosition = barSteteSelector(surveyData, 'shortBar').Position
    this.shortBarStyle = barSteteSelector(surveyData, 'shortBar').Style
    this.contentPosition = barSteteSelector(surveyData, 'content').Position
    this.contentStyle = barSteteSelector(surveyData, 'content').Style
    this.navigationBarPosition = barSteteSelector(surveyData, 'navigationBar').Position
    this.navigationBarStyle = barSteteSelector(surveyData, 'navigationBar').Style
  }
}
