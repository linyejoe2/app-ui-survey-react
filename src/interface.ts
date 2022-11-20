export type UiStyle = "Facebook" | "Instagram" | "TikTok" | 'YouTube'

export interface IFCProps {
  children?: React.ReactNode
}

export interface IsurveyData {
  gender: "male" | "female" | "other" | '' | string,
  age: '20' | '30' | '40' | '50' | '60' | '70' | '80' | '' | string,
  defaultUI: string,
  positionDatas: IpositionData[]
}

export interface IpositionData {
  uid: string,
  name: string,
  position: string,
  enable: boolean,
  style: UiStyle,
  color: string
}

/**
 * props of Survey, can control state of Survey
 */
export interface ISurveyProps {
  children?: React.ReactNode
  state: IsurveyData,
  changeSurveyData: (updateData: IsurveyData) => void
}