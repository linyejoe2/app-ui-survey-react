import './App.css'
// import { useState } from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'
import TransferSurveyData from "../../service/TransferSurveyData"

function App() {
  const { t } = useTranslation()
  const onMobile = useMediaQuery('(max-width:600px)')
  const onSmallMobile = useMediaQuery('(max-width:400px)')
  // const { t, i18n } = useTranslation()
  // const [count, setCount] = useState(0)
  const sandData = () => {
    const requestOptions: RequestInit = {
      redirect: "follow",
      method: 'POST',
      headers: { 'Content-Type': "text/plain;charset=utf-8" },
      body: JSON.stringify(new TransferSurveyData({
        user: '',
        gender: 'male',
        age: '0',
        defaultUI: 'Facebook',
        themeStyle: 'YouTube',
        themeMode: 'light',
        UIStyle: undefined,
        positionDatas: [
          { uid: '1', name: 'titleBar', position: '1', enable: true, style: 'Instagram', fixed: true },
          { uid: '2', name: 'functionBar', position: '2', enable: false, style: 'Facebook', fixed: false },
          { uid: '3', name: 'shortBar', position: '3', enable: true, style: 'Instagram', fixed: false },
          { uid: '4', name: 'content', position: '4', enable: true, style: 'Instagram', fixed: false },
          { uid: '5', name: 'navigationBar', position: '5', enable: true, style: 'Instagram', fixed: true }
        ]
      }))
      // body: JSON.stringify({
      //   data: "dslfjasl",
      //   mathod: "set"
      // })
    }
    fetch('https://script.google.com/macros/s/AKfycbz72nXTClVVFzadkVjjvAk2Ci7ixF8xpFkZuZutm0bYra_GeS2SZMlp8ztcfGZC2nXqtg/exec', requestOptions)
      .then(response => response.text())
      .then(json => {
        console.log(json)
        // response.json()
      })
  }

  return (
    <div className="App">
      <div>
        <a href="#">
          <img src="./socialMedia.svg" className="logo" style={{
            // height: {onMobile?'':'200px'},
            width: onMobile ? onSmallMobile ? '200px' : '300px' : '300px',
            padding: '0',
            display: 'inline-block',
            willChange: 'filter'
          }} alt="TP logo" />
        </a>
      </div>
      <h1>{t('main.title')}</h1>
      {/* <div className="card">
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <Button variant="outlined" href={`hello-world`}>Hello World</Button>
      </div> */}
      <div className="card">
        <Button variant="contained" href={'./#/survey'}>選擇你最愛的社群介面！</Button>
        <Button variant='contained' onClick={sandData}>test</Button>
      </div>
    </div>
  )
}

export default App
