import { useState } from 'react'
import {Navbar} from '@repo/ui/navbar'
import './App.css'
import PatientLogin from './pages/PatientLogin'
import PatientRegistration from './pages/PatientRegistration'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path="/patient/login" element={<PatientLogin/>}/>
            <Route path="/patient/register" element={<PatientRegistration/>}/>
            <Route path="/patient/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      {/* <PatientRegistration/>
      <PatientLogin/> */}
      <div className="text-xl">Patient</div>
    </>
  )
}

export default App
