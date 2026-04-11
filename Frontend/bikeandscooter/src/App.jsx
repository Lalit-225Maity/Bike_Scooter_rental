import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Navbar/Navbar'
import Signin from './Auth/Signin'
import About from './Pages/About/About'
import Checkout from './Services/Checkout'
import VehicleProtect from './ProtectedRoute/VehicleProtect'
import Booking from './Services/Booking'
import Footer from './Footer/Footer'
 
import Blog from './Pages/Blog/Blog'
import Subscription from './Pages/Subcription/Subscription'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Payment from './Services/Payment/Payment'
import Signup from './Auth/Signup'
import { useLocation } from 'react-router-dom'
import Mybookings from './Pages/MyBookings/Mybookings'
import OTP from './Auth/OTP/OTP'
const App = () => {
  const location = useLocation();

  return (
    <div className='client'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/otp' element={<OTP />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/about' element={<About />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route element={<VehicleProtect />}>
            <Route path='/pay' element={<Payment />} />
          </Route>
          <Route path='blog' element={<Blog />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='mybooking' element={<Mybookings />} />
        </Route>


      </Routes>
      {location.pathname !== '/signup' && location.pathname !== '/otp' && location.pathname !== '/signin' && <Footer />}
    </div>
  )
}

export default App
