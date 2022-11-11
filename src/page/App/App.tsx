import './App.css'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import Button from "@mui/material/Button"
import Survey from '../Survey/Survey'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
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
      </div>
      <div className="card">
        <Button variant="outlined" href={`survey`}>選擇你最愛的社群介面！</Button>
      </div>
    </div>
  )
}

export default App
