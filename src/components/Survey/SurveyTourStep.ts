import { StepType } from "@reactour/tour"

export const SurveyTourSteps = (t: (s: string) => string): StepType[] => {
  return [
    {
      selector: '[data-tour="1"]',
      content: "歡迎測驗！這是一個簡單的導覽！\n\n電腦版按 Enter 可以下一步\n手機板選擇選項後會自動下一步\n\n"
    },
    {
      selector: "[data-tour='2']",
      content: 'text 2'
    },
    {
      selector: "[data-tour='3']",
      content: 'text 3'
    }
  ]
}

export const SurveyTourSteps2 = [
  {
    selector: '[data-tour="1"]',
    content: "sdfdsfsdvds"
  },
  {
    selector: "[data-tour='2']",
    content: 'text 2'
  },
  {
    selector: "[data-tour='3']",
    content: 'text 3'
  }
]
