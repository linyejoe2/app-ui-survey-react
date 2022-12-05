import { StepType } from '@reactour/tour'

export const SurveyTourSteps = (t: (s: string) => string): StepType[] => {
  return [
    {
      selector: '[data-tour="0"]',
      content: '歡迎測驗！這是一個簡單的導覽！\n\n在空白處點擊繼續導覽\n或是按左上角叉叉自己探索~'
    },
    {
      selector: "[data-tour='2']",
      content: '這是你的手機模板，繼續作題，等等專屬於你的介面就會顯示在這！'
    },
    {
      selector: "[data-tour='2-1']",
      content: '點擊地球切換你想要看的語言！'
    },
    {
      selector: '[data-tour="1"]',
      content: '電腦版按 Enter 可以下一步\n手機板選擇選項後會自動下一步！'
      // actionAfter: (elem) => {
      //   elem.
      // }
    },
    {
      selector: "[data-tour='4']",
      content: '這邊是所有的可操控的組件。'
    },
    {
      selector: "[data-tour='5']",
      content: '按住選項，上下拖拉可以排序你的組件。'
    },
    {
      selector: "[data-tour='6']",
      content: '不想用的組件，就直接取消勾選！'
    },
    {
      selector: "[data-tour='7']",
      content: '想釘選的組件，就直接釘起來！\n\n[*釘選的組件不會隨著內容滾動]\n[*釘選的組件必須位於最上方或最下方]'
    },
    {
      selector: "[data-tour='7-1']",
      content: '對組件有疑問嗎？點擊問號按鈕吧！'
    },
    {
      selector: "[data-tour='8']",
      content: '您的變更都會顯示在畫面上\n嘗試跟畫面互動看看！'
    },
    {
      selector: "[data-tour='9']",
      content: '您可以在後面的步驟調整組件的樣式！'
    }
  ]
}

export const SurveyTourSteps2 = [
  {
    selector: '[data-tour="1"]',
    content: 'sdfdsfsdvds'
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
