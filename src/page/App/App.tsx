import './App.css'
// import { useState } from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'

function App() {
  const { t } = useTranslation()
  const onMobile = useMediaQuery('(max-width:600px)')
  const onSmallMobile = useMediaQuery('(max-width:400px)')

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
        {/* <Button variant='contained' onClick={sandData}>test</Button> */}
      </div>
    </div>
  )
}

export default App
