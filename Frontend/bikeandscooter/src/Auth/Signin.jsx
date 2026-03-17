import React from 'react'
import { NavLink } from 'react-router-dom'
const Signin = () => {
  return (
    <div className='signin' style={{marginTop:"50vh"}} >
      <NavLink to='/signup'>signup</NavLink>
    </div>
  )
}

export default Signin
