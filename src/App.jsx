import { Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import LogIn from './pages/LogIn'
import Register from './pages/Register'

function App() {

  return (
    <div className='App'>
    <Navbar/>

      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/register" element={<Register/>} />

      </Routes>
    </div>
  )
}

export default App
