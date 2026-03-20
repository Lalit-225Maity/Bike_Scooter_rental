import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
const ProtectedRoute = () => {
   const isLoggedin=localStorage.getItem("User");
   return isLoggedin?<Outlet/>:<Navigate to='/signin'/>
}
export default ProtectedRoute
