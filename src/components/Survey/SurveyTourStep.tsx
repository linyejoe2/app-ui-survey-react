import { Backdrop, Box, Button, Typography } from '@mui/material'
import { StepType } from '@reactour/tour'
import { CustomBackdrop } from './HelpBackdrop'

export const SurveyTourSteps = (t: (s: string) => string): StepType[] => {
  return []
  return [
    {
      selector: '[data-tour="0"]',
      content: '歡迎測驗！這是一個簡單的導覽！\n\n在空白處點擊繼續導覽\n或是按左上角叉叉自己探索~'
      // action(elem) {
      // }
    },
    {
      selector: "[data-tour='2']",
      content: '這是你的手機模板，繼續作題，等等專屬於你的介面就會顯示在這！'
    },
    {
      selector: "[data-tour='2-1']",
      content: '點擊地球可以切換你想要看的語言！'
    },
    // {
    //   selector: "[data-tour='2-2']",
    //   content: '點擊問號可以重複查看導覽！'
    // },
    {
      selector: '[data-tour="1"]',
      // content: '電腦版按 Enter 可以下一步\n手機板選擇選項後會自動下一步！'
      content: (prop) => {
        return (
          <>
            <Box>
              電腦版按 Enter 可以下一步
            </Box>
            <Button variant="contained" sx={{
              display: "block",
              m: "auto",
              mt: 2
            }}
              onClick={() => prop.setIsOpen(false)}>開始測驗～</Button>
          </>)
      }
      // actionAfter: (elem) => {
      //   elem.
      // }
    }
  ]
}

export const SurveyTourSteps2 = (t: (s: string) => string): StepType[] => {
  return [{
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
    content: () => { return '您的變更都會顯示在畫面上\n嘗試跟畫面互動看看！' },
    stepInteraction: true
  },
  {
    selector: "[data-tour='9']",
    // content: '您可以在後面的步驟調整組件的樣式！'
    content: (prop) => {
      return (
        <>
          <Box>
            開始調整吧！
          </Box>
          <Button variant="contained" sx={{
            display: "block",
            m: "auto",
            mt: 2
          }}
            onClick={() => prop.setIsOpen(false)}>結束導覽～</Button>
        </>)
    }
  }
  ]
}

export const SurveyTourSteps3 = (t: (s: string) => string): StepType[] => {
  return [
    {
      selector: "[data-tour='3-1']",
      content: "我們將社群媒體的 UI 介面劃分成了五個不同的組件\n接著您將會認識這五個不同的組件\n並且選擇你最喜歡的樣式！"
    },
    {
      selector: "[data-tour='8']",
      content: (prop) => {
        return (
          <>
            <Box>
              您的變更都會顯示在畫面上<br />嘗試跟畫面互動看看！
            </Box>
            <Button variant="contained" sx={{
              display: "block",
              m: "auto",
              mt: 2
            }}
              onClick={() => prop.setIsOpen(false)}>結束導覽～</Button>
          </>)
      },
      stepInteraction: true
    }
  ]
}

export const SurveyTourSteps4 = (t: (s: string) => string): StepType[] => {
  return [
    // {
    //   selector: "[data-tour='3-1']",
    //   content: "我們將社群媒體的 UI 介面劃分成了五個不同的組件\n接著您將會認識這五個不同的組件\n並且選擇你最喜歡的樣式！"
    // },
    {
      selector: "[data-tour='8']",
      content: (prop) => {
        return (
          <>
            <Box>
              您選擇的社群媒體介面樣式將會顯示在這邊<br/>
              嘗試跟畫面互動看看！
            </Box>
            <Button variant="text" sx={{
              display: "block",
              m: "auto",
              mt: 2
            }}
              onClick={() => prop.setIsOpen(false)}>結束導覽～</Button>
          </>)
      },
      stepInteraction: true
      // position: "bottom"
    }
  ]
}

// export const SurveyTourSteps2 = (t: (s: string) => string): StepType[] => {}

// export const SurveyTourSteps2 = [
//   {
//     selector: '[data-tour="1"]',
//     content: 'sdfdsfsdvds'
//   },
//   {
//     selector: "[data-tour='2']",
//     content: 'text 2'
//   },
//   {
//     selector: "[data-tour='3']",
//     content: 'text 3'
//   }
// ]
