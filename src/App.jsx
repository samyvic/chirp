import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Homepage } from './_patterns/03_pages/00-homepage/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
