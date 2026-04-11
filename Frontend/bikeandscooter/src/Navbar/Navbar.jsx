import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Navbar = () => {
    const navigate = useNavigate();
    const [load, setload] = useState(false);
    const [open, setopen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [appuser, setappuser] = useState();
    useEffect(() => {
        const storedUser = localStorage.getItem("User");

        if (storedUser) {
            setappuser(JSON.parse(storedUser));
        }
    }, []);

    const Logout = () => {
        setload(true);
        setTimeout(async () => {

            if (appuser) {
                localStorage.removeItem("User");
                localStorage.removeItem("Vehicle");
                const response = await axios.post('/api/logout');
                console.log(response.data);
            }
            setload(false);
            window.location.reload();
        }, 3000);

    }
    return (
        <div className='navbar'>
            <div className="nav-details">
                <img src="/freedo-logo.ba97d96f7642e3c8c26b.png" alt="" onClick={() => { navigate('/') }} />
                  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
                <div className={`nav-mid ${menuOpen ? "active" : ""}`} >
                    <NavLink to='/' className={({ isActive }) => isActive ? "active" : "not-active"}>Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "active" : "not-active"}>About</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? "active" : "not-active"}>Blog</NavLink>
                    <NavLink to='/subscription' className={({ isActive }) => isActive ? "active" : "not-active"}><button>Subscription</button></NavLink>
                

                </div>
                <div className="nav-end">
                    {appuser ? (
                        <div className="user-exists" onMouseEnter={() => { setopen(true) }} onMouseLeave={() => { setopen(false) }}>
                            <img src="/user (4).png" alt="Error" />
                            <p>{appuser.FirstName}</p>
                            {open && (
                                <div className="user-details">
                                    <p onClick={() => { Logout() }}>Logout</p>
                                    <p onClick={() => { navigate('/mybooking') }}>My Bookings</p>
                                </div>
                            )}
                        </div>
                    ) : (<NavLink to='/signin'><button>Sign In</button></NavLink>)}
                </div>
            </div>
            {load && (
                <div className="pageload">
                    <div className="spin"></div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    )
}

export default Navbar
