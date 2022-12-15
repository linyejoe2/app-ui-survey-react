import { Box, Button } from '@mui/material'
import { StepType } from '@reactour/tour'
import React from 'react'
import { HelpBackdrop } from './HelpBackdrop'

export const SurveyTourSteps = (t: (s: string) => string): StepType[] => {
  return [
    {
      selector: '[data-tour="0"]',
      content: '歡迎測驗！這是一個簡單的導覽！\n\n點擊箭頭繼續導覽。',
      // stepInteraction: true
      // content: (props) => (
      //   <div>
      //     <div>歡迎測驗！這是一個簡單的導覽！<br /><br />點擊箭頭繼續導覽</div>
      //     <button onClick={() => props.setIsOpen(false)}>go back logo</button>
      //   </div>),
      // action(elem) {
      // }
    },
    {
      selector: "[data-tour='2']",
      content: '這是你的手機模板，繼續作題，等等專屬於你的介面就會顯示在這！'
    },
    {
      selector: "[data-tour='2-1']",
      // highlightedSelectors: ["[id='data2-1']"],
      // mutationObservables: ["[id='lock-menu']"],
      // highlightedSelectors: ["[id='lock-menu']"],
      content: '點擊地球可以切換你想要看的語言！'
      // stepInteraction: true
    },
    {
      selector: '[data-tour="1"]',
      // content: '電腦版按 Enter 可以下一步\n手機板選擇選項後會自動下一步！'
      content: (props) => (
        <div>
          <div>電腦版按 Enter 可以下一步</div>
          <Button variant="contained"
            sx={{
              m: "auto",
              mt: 2,
              display: 'block'
            }}
            onClick={() => props.setIsOpen(false)}>開始測驗！</Button>
        </div>)
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
      content: () => { return '您的變更都會顯示在畫面上\n嘗試跟畫面互動看看！' },
      stepInteraction: true
    },
    {
      selector: "[data-tour='9']",
      content: '您可以在後面的步驟調整組件的樣式！'
    }
  ]
}

export const SurveyTourSteps2 = (t: (s: string) => string, setHelpBackdropStep?: (num: number) => void): StepType[] => {
  return [{
    selector: "[data-tour='4']",
    content: (prop) => {
      // const [helpBackdropStep, setHelpBackdropStep] = React.useState(0)
      return (
        <>
          <Box>
            這邊是所有的可操控的組件。
          </Box>
          <Button variant="contained" sx={{
            display: "block",
            m: "auto",
            mt: 2
          }}
            onClick={() => setHelpBackdropStep!(1)}>什麼是組件?</Button>
        </>)
    }
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
    // content: '想釘選的組件，就直接釘起來！\n\n[*釘選的組件不會隨著內容滾動]\n[*釘選的組件必須位於最上方或最下方]',
    content: (prop) => {
      // const [helpBackdropStep, setHelpBackdropStep] = React.useState(0)
      return (
        <>
          <Box>
          想釘選的組件，就直接釘起來！\n\n[*釘選的組件不會隨著內容滾動]\n[*釘選的組件必須位於最上方或最下方]
          </Box>
          <Button variant="contained" sx={{
            display: "block",
            m: "auto",
            mt: 2
          }}
            onClick={() => setHelpBackdropStep!(2)}>什麼是釘選?</Button>
        </>)
    }
  },
  {
    selector: "[data-tour='7-1']",
    content: '對組件有疑問嗎？點擊問號按鈕吧！'
  },
  {
    selector: "[data-tour='7-2']",
    content: '剩下的疑問也可以來這邊看！'
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
