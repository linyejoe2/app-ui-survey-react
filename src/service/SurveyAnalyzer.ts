import { ISurveyAnalyze, ISurveyData, TSocialMedia } from '../interface'

export class SurveyAnalyzer implements ISurveyAnalyze {
  defaultUI: TSocialMedia
  mostLikeUI: { UIName: TSocialMedia; count: number; } = {
    UIName: 'Facebook',
    count: 0
  }

  barCount2 = {
    Facebook: 0,
    Instagram: 0,
    YouTube: 0,
    Dcard: 0
  }
  // barCount: (TSocialMedia | number)[][] = [
  //   ["Facebook", 0],
  //   ["Instagram", 0],
  //   ["YouTube", 0],
  //   ["Dcard", 0]
  // ]

  constructor(surveyData: ISurveyData) {
    this.defaultUI = surveyData.defaultUI

    for (const ele of surveyData.positionDatas) {
      switch (ele.style) {
        case 'Facebook':
          this.barCount2.Facebook += 1
          if (this.mostLikeUI.count < this.barCount2.Facebook) {
            this.mostLikeUI.UIName = 'Facebook'
            this.mostLikeUI.count = this.barCount2.Facebook
          }
          break
        case 'Instagram':
          this.barCount2.Instagram += 1
          if (this.mostLikeUI.count < this.barCount2.Instagram) {
            this.mostLikeUI.UIName = 'Instagram'
            this.mostLikeUI.count = this.barCount2.Instagram
          }
          break
        case 'YouTube':
          this.barCount2.YouTube += 1
          if (this.mostLikeUI.count < this.barCount2.YouTube) {
            this.mostLikeUI.UIName = 'YouTube'
            this.mostLikeUI.count = this.barCount2.YouTube
          }
          break
        case 'Dcard':
          this.barCount2.Dcard += 1
          if (this.mostLikeUI.count < this.barCount2.Dcard) {
            this.mostLikeUI.UIName = 'Dcard'
            this.mostLikeUI.count = this.barCount2.Dcard
          }
          break
      }
    }
  }
}
