
import {Navbar} from '@repo/ui/navbar'
import './App.css'
import DoctorLogin from './pages/DoctorLogin'
import DoctorRegistration from './pages/DoctorRegistration'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path="/doctor/login" element={<DoctorLogin/>}/>
            <Route path="/doctor/register" element={<DoctorRegistration/>}/>
            <Route path="/doctor/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      <div className="text-xl">Doctor</div>
    </>
  )
}

export default App
