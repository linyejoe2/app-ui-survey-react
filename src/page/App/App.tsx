import './App.css'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import Button from "@mui/material/Button"
import Survey from '../Survey/Survey'


import { RootState, AppDispatch } from '../../store/configurestore'
import { useDispatch, useSelector } from 'react-redux';
import { addOne, delOne } from '../../reducers/themeReducer'

function App() {
  const dispatch = useDispatch();
  const count2 = useSelector((state: RootState) => state.num);
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
        <Button variant="contained" onClick={() =>dispatch(addOne())}>
          count2 is {count2}
        </Button>
        <Button variant="contained" onClick={() =>dispatch(delOne())}>
          delOne
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="mb-4">
        <Button variant="outlined" href={`hello-world`}>Hello World</Button>
      </div>
      <div>
        <Button variant="outlined" href={`survey`}>選擇你最愛的社群介面！</Button>
      </div>
    </div>
  )
}

export default App
