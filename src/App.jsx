import { useState } from 'react'
import CountCom from './components/count/CountCom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountCom/>
    </>
  )
}

export default App
