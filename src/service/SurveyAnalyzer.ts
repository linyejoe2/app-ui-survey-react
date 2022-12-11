import { ISurveyAnalyze, ISurveyData, TSocialMedia } from '../interface'

export class SurveyAnalyzer implements ISurveyAnalyze {
  defaultUI: TSocialMedia
  mostLikeUI: { UIName: TSocialMedia; count: number; }[] = [{
    UIName: 'Facebook',
    count: 0
  }]

  barCount2 = {
    Facebook: 0,
    Instagram: 0,
    YouTube: 0,
    Dcard: 0,
    unused: 0
  }
  // barCount: (TSocialMedia | number)[][] = [
  //   ["Facebook", 0],
  //   ["Instagram", 0],
  //   ["YouTube", 0],
  //   ["Dcard", 0]
  // ]

  constructor(surveyData: ISurveyData) {
    this.defaultUI = surveyData.defaultUI

    // 把本來就沒有的組件設為未使用
    // for (const ele of surveyData.positionDatas) {
    //   if (ele.uid === "2" && ele.style === "Instagram") ele.enable = false
    //   if (ele.uid === "4" && ele.style === "Dcard") ele.enable = false
    // }

    // 計算他用最多的組件
    for (const ele of surveyData.positionDatas) {
      if (!ele.enable ||
        (ele.uid === "2" && ele.style === "Instagram") ||
        (ele.uid === "3" && ele.style === "Dcard")) {
        this.barCount2.unused += 1
        continue
      }
      switch (ele.style) {
        case 'Facebook':
          this.barCount2.Facebook += 1
          if (this.mostLikeUI[0].count < this.barCount2.Facebook) {
            this.mostLikeUI[0].UIName = 'Facebook'
            this.mostLikeUI[0].count = this.barCount2.Facebook
          }
          break
        case 'Instagram':
          this.barCount2.Instagram += 1
          if (this.mostLikeUI[0].count < this.barCount2.Instagram) {
            this.mostLikeUI[0].UIName = 'Instagram'
            this.mostLikeUI[0].count = this.barCount2.Instagram
          }
          break
        case 'YouTube':
          this.barCount2.YouTube += 1
          if (this.mostLikeUI[0].count < this.barCount2.YouTube) {
            this.mostLikeUI[0].UIName = 'YouTube'
            this.mostLikeUI[0].count = this.barCount2.YouTube
          }
          break
        case 'Dcard':
          this.barCount2.Dcard += 1
          if (this.mostLikeUI[0].count < this.barCount2.Dcard) {
            this.mostLikeUI[0].UIName = 'Dcard'
            this.mostLikeUI[0].count = this.barCount2.Dcard
          }
          break
      }
    }

    // 如果有重複選擇數量的，將會在這次迴圈計算
    for (const ele of surveyData.positionDatas) {
      if (!ele.enable) {
        continue
      }
      switch (ele.style) {
        case 'Facebook':
          if (this.mostLikeUI[0].count === this.barCount2.Facebook && this.mostLikeUI[0].UIName !== "Facebook") {
            const temp = { UIName: 'Facebook' as TSocialMedia, count: this.barCount2.Facebook }
            this.mostLikeUI.push(temp)
          }
          break
        case 'Instagram':
          if (this.mostLikeUI[0].count === this.barCount2.Instagram && this.mostLikeUI[0].UIName !== "Instagram") {
            const temp = { UIName: 'Instagram' as TSocialMedia, count: this.barCount2.Instagram }
            this.mostLikeUI.push(temp)
          }
          break
        case 'YouTube':
          if (this.mostLikeUI[0].count === this.barCount2.YouTube && this.mostLikeUI[0].UIName !== "YouTube") {
            const temp = { UIName: 'YouTube' as TSocialMedia, count: this.barCount2.YouTube }
            this.mostLikeUI.push(temp)
          }
          break
        case 'Dcard':
          if (this.mostLikeUI[0].count === this.barCount2.Dcard && this.mostLikeUI[0].UIName !== "Dcard") {
            const temp = { UIName: 'Dcard' as TSocialMedia, count: this.barCount2.Dcard }
            this.mostLikeUI.push(temp)
          }
          break
      }
    }
  }
}
