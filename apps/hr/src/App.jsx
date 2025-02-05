
import {Navbar} from '@repo/ui/navbar'
import './App.css'
import HrLogin from './pages/HrLogin'
import HrRegistration from './pages/HrRegistration'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path="/hr/login" element={<HrLogin/>}/>
            <Route path="/hr/register" element={<HrRegistration/>}/>
            <Route path="/hr/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      <div className="text-xl">HR</div>
    </>
  )
}

export default App
