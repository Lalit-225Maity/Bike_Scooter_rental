import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const VehicleProtect = () => {
   const selectVehicle=localStorage.getItem("Vehicle");
   return selectVehicle?<Outlet/>:<Navigate to='/booking'/>
}

export default VehicleProtect
