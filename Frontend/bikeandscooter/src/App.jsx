import React  from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Navbar/Navbar'
import Signin from './Auth/Signin'
import About from './Pages/About/About'
import Checkout from './Services/Checkout'
import Booking from './Services/Booking'
import Footer from './Footer/Footer'
import Signup from './Auth/Signup'
import { useLocation } from 'react-router-dom'
import OTP from './Auth/OTP/OTP'
const App = () => {
  const location=useLocation();

  return (
    <div className='client'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/about' element={<About />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='otp' element={<OTP/>}/>
      </Routes>
      {location.pathname!=='/signup'&& location.pathname!=='/otp'&&location.pathname!=='/signin'&&<Footer />}
    </div>
  )
}

export default App
