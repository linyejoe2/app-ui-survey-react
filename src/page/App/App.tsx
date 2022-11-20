import './App.css'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import Button from "@mui/material/Button"
import Survey from '../Survey/Survey'
import { useTranslation } from 'react-i18next'

import React from 'react'



function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="#">
          <img src="/TP.svg" className="logo" style={{
            height: "200px",
            padding: "0",
            display: "inline-block",
            willChange: "filter"
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
        <Button variant="contained" href={`survey`}>選擇你最愛的社群介面！</Button>
      </div>
    </div>
  )
}

export default App
