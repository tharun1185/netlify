import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HealthcarePage from './healthcare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-gray-50 text-gray-800 font-inter">
      <HealthcarePage />
     </div>
    </>
  )
}

export default App
