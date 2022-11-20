export type TSocialMedia = "Facebook" | "Instagram" | "TikTok" | 'YouTube' | "Dcard" | ""

export type TThemeMode = "light" | "dark" | "system"

export type TPosition = 0 | 1 | 2 | 3 | 4 | 5

export type TBar = "titleBar" | "functionBar" | "shortBar" | "content" | "navigationBar"

export interface IFCProps {
  children?: React.ReactNode
}

export interface IPhoneBar {
  Position: TPosition,
  Style: TSocialMedia
}

export interface ISurveyData {
  user: string
  gender: "male" | "female" | "other" | '' | string,
  age: '0' | '20' | '30' | '40' | '50' | '60' | '70' | '' | string,
  defaultUI: TSocialMedia,
  themeStyle: TSocialMedia,
  themeMode: TThemeMode,
  UIStyle: Map<TBar, IPhoneBar>
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
  name: string,
  position: string,
  enable: boolean,
  style: TSocialMedia,
  color: string
}

/**
 * props of Survey, can control state of Survey
 */
export interface ISurveyProps {
  children?: React.ReactNode
  state: ISurveyData,
  changeSurveyData: (updateData: ISurveyData) => void
}