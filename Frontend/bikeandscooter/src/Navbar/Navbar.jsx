import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div className="nav-details">
                <img src="/freedo-logo.ba97d96f7642e3c8c26b.png" alt="" onClick={() => { navigate('/') }} />
                <div className="nav-mid">
                    <NavLink to='/home' className={({isActive})=>isActive ? "active" : "not-active"}>Home</NavLink>
                    <NavLink to='/about' className={({isActive})=>isActive ? "active" : "not-active"}>About</NavLink>
                    <NavLink to='/blog' className={({isActive})=>isActive ? "active" : "not-active"}>Blog</NavLink>
                    <NavLink to='/subscription' className={({isActive})=>isActive ? "active" : "not-active"}><button>Subscription</button></NavLink>

                </div>
                <div className="nav-end">
                    <NavLink to='/signin'><button>Sign In</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
