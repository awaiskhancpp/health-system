
// import { Router,Routes,Route } from 'react-router-dom'
import './App.css'
import {Navbar} from '@repo/ui/navbar'
import AdminLogin from './pages/AdminLogin'
import AdminRegistration from './pages/AdminRegistration'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <>
    <Navbar/>
    <BrowserRouter>
        <Routes>
            <Route path="/admin/login" element={<AdminLogin/>}/>
            <Route path="/admin/register" element={<AdminRegistration/>}/>
            <Route path="/admin/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    <div className='text-4xl' >Admin</div>
      {/* <Router>
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router> */}
    </>
  )
}

export default App
