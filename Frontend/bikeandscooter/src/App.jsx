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
      </Routes>
      {location.pathname!=='/signup'&& <Footer />}
    </div>
  )
}

export default App
