import React from 'react'

export type TSocialMedia = 'Facebook' | 'Instagram' | 'TikTok' | 'YouTube' | 'Dcard' | ''

export type TThemeMode = 'light' | 'dark' | 'system'

export type TPosition2 = 0 | 1 | 2 | 3 | 4 | 5
export type TPosition = '0' | '1' | '2' | '3' | '4' | '5'

export type TBar = 'titleBar' | 'functionBar' | 'shortBar' | 'content' | 'navigationBar'

export interface IFCProps {
  children?: React.ReactNode
}

export interface IPhoneBar {
  Position: TPosition,
  Style: TSocialMedia,
  Fixed?: boolean | ""
}

export interface IpositionData {
  uid: string,
  name: TBar,
  position: TPosition,
  style: TSocialMedia,
  fixed: boolean,
  enable: boolean
}

export interface ISurveyData {
  user: string
  gender: 'male' | 'female' | 'other' | '' | string,
  age: '0' | '20' | '30' | '40' | '50' | '60' | '70' | '' | string,
  defaultUI: TSocialMedia,
  themeStyle: TSocialMedia,
  themeMode: TThemeMode,
  positionDatas: IpositionData[],
  UIStyle?: Map<TBar, IPhoneBar>
  // UIStyle?: {
  //   titleBar: IPhoneBar,
  //   functionBar: IPhoneBar,
  //   shortBar: IPhoneBar,
  //   content: IPhoneBar,
  //   navigationBar: IPhoneBar,
  // }
}

export interface ISandSurveyData {
  date: string,
  user: string,
  gender: string,
  age: string,
  defaultUI: string,
  theme: string,
  themeMode: string,
  titleBarPosition: string,
  titleBarStyle: string,
  functionBarPosition: string,
  functionBarStyle: string,
  shortBarPosition: string,
  shortBarStyle: string,
  contentPosition: string,
  contentStyle: string,
  navigationBarPosition: string,
  navigationBarStyle: string,
}

/**
 * props of Survey, can control state of Survey
 */
export interface ISurveyProps {
  children?: React.ReactNode
  state: ISurveyData,
  changeSurveyData: (updateData: ISurveyData) => void,
  progress?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export interface IPhoneHeight {
  beforeBody: number,
  body: number,
  afterBody: number,
  beforeContent: boolean,
  firstBar: boolean
}

export interface ISurveyAnalyze {
  defaultUI: TSocialMedia,
  mostLikeUI: {
    UIName: TSocialMedia,
    count: number
  }
  barCount?: (TSocialMedia | number)[][]

  barCount2: {
    Facebook: number,
    Instagram: number,
    YouTube: number,
    Dcard: number
  }
}
