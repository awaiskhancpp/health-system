import { useState } from 'react'
import {Navbar} from '@repo/ui/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="text-xl">Doctor</div>
    </>
  )
}

export default App
