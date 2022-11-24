export type TSocialMedia = "Facebook" | "Instagram" | "TikTok" | 'YouTube' | "Dcard" | ""

export type TThemeMode = "light" | "dark" | "system"

export type TPosition2 = 0 | 1 | 2 | 3 | 4 | 5
export type TPosition = "1" | "2" | "3" | '4' | "5"

export type TBar = "titleBar" | "functionBar" | "shortBar" | "content" | "navigationBar"

export interface IFCProps {
  children?: React.ReactNode
}

export interface IPhoneBar {
  Position: TPosition2,
  Style: TSocialMedia
}

export interface ISurveyData {
  user: string
  gender: "male" | "female" | "other" | '' | string,
  age: '0' | '20' | '30' | '40' | '50' | '60' | '70' | '' | string,
  defaultUI: TSocialMedia,
  themeStyle: TSocialMedia,
  themeMode: TThemeMode,
  positionDatas?: IpositionData[],
  UIStyle?: Map<TBar, IPhoneBar>
  // UIStyle?: {
  //   titleBar: IPhoneBar,
  //   functionBar: IPhoneBar,
  //   shortBar: IPhoneBar,
  //   content: IPhoneBar,
  //   navigationBar: IPhoneBar,
  // }
}

export interface IpositionData {
  uid: string,
  name: TBar,
  position: TPosition,
  style: TSocialMedia,
  fixed: boolean,
  enable: boolean
}

/**
 * props of Survey, can control state of Survey
 */
export interface ISurveyProps {
  children?: React.ReactNode
  state: ISurveyData,
  changeSurveyData: (updateData: ISurveyData) => void
}

export interface IPhoneHeight {
  beforeBody: number,
  body: number,
  afterBody: number,
  beforeContent: boolean,
  firstBar: boolean
}