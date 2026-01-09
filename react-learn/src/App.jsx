import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-[100px]'>Hellow World</h1>
      <h2 className='text-slate-800'>Test Tailwind</h2>
    </div>
  )
}

export default App
