
// import { Router,Routes,Route } from 'react-router-dom'
import './App.css'
import {Navbar} from '@repo/ui/navbar'
function App() {

  return (
    <>
    <Navbar/>
    <div className='text-4xl' >Hi!</div>
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
