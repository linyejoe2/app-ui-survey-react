import './App.css'
// import { useState } from 'react'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { Box, Typography, useMediaQuery } from '@mui/material'

function App() {
  const { t } = useTranslation()
  const onMobile = useMediaQuery('(max-width:600px)')
  // const onLaptop = useMediaQuery('(max-width:1000px)')
  const onSmallMobile = useMediaQuery('(max-width:400px)')

  return (
    <div className="App">
      <div>
        {/* <a href="#"> */}
        <img src="./socialMedia.svg" className="logo" style={{
          // height: {onMobile?'':'200px'},
          width: onMobile ? onSmallMobile ? '200px' : '300px' : '300px',
          padding: '0',
          display: 'inline-block',
          willChange: 'filter'
        }} alt="TP logo" />
        {/* </a> */}
      </div>
      <Typography variant="h5"
        sx={{
          // width: onMobile ? 300 : onLaptop ? 500 : undefined,
          mt: 4
          // margin: onLaptop ? 'auto' : undefined,
          // textAlign: !onLaptop ? 'left' : undefined
        }}>
        {t('main.t')}
      </Typography>
      <Typography variant="h6"
        sx={{
          // width: onMobile ? 300 : onLaptop ? 500 : undefined,
          mt: 4
          // margin: onLaptop ? 'auto' : undefined,
          // textAlign: !onLaptop ? 'left' : undefined
        }}>
        {t('main.t2')}
      </Typography>
      <Typography variant="body1"
        sx={{
          // width: onMobile ? 300 : onLaptop ? 500 : undefined,
          mt: 1
          // margin: onLaptop ? 'auto' : undefined,
          // textAlign: !onLaptop ? 'left' : undefined
        }}>
        {t('main.t3')}
      </Typography>
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
      <Box className="card" sx={{ mt: 2 }}>
        <Button variant="contained" href={'./#/survey'}>
          {/* 選擇你最愛的社群介面！ */}
          {/* <h3>{t('main.title')}</h3> */}
          <Typography variant='h5' sx={{ ma: 0 }}>
            {t('main.title')}
          </Typography>
        </Button>
        {/* <Button variant='contained' onClick={sandData}>test</Button> */}
      </Box>
    </div>
  )
}

export default App
