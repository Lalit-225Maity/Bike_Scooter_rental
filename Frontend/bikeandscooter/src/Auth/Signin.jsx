import React from 'react'
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Signin.css'
const Signin = () => {
  const navigate = useNavigate();
  const [appear, setappear] = useState('');
  const {
    register: userregister,
    handleSubmit: usersubmit,
    formState: { isSubmitting: userSubmitting }
  } = useForm();
  const userlogin = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const CreateData = {
            ...data,
            EmailID: data.Email
          }
          const response = await axios.post('/api/login', data);
          console.log(response.data.Users);
          if (response.data.Users) {
       
            const response2 = await axios.post('/api/otp', CreateData);
            console.log(response2.data.OTPgenerate);
            
            navigate('/otp', { state: { Email: data.Email,User:response.data.Users}})
          }
          resolve();
        } catch (error) {
          console.log(error.response.data.message);

          reject();
        }
      }, 3000);
    })
  }


  return (
    <div className='signin'  >
      <h4>Login</h4>
      <div className="user-signin">

        <div className="user-login-details">
          <div className="signin-heading">
            <img src="/freedo-logo.ba97d96f7642e3c8c26b.png" alt="" />
            <span> <h5>Welcome</h5>
              <p> Login for a seamless experience</p></span>
          </div>
          <form onSubmit={usersubmit(userlogin)}>

            <TextField label="Email" variant="outlined" {...userregister("Email")}
              className='useremaildetail'

            />
            <div className="terms">
              <input type="checkbox" name="term" id="userterm" onChange={(e) => { setappear(e.target.checked) }} />
              <label htmlFor="userterm">I Agree to Terms and Conditions</label>
            </div>
            <button type="submit" disabled={!appear}>{userSubmitting ? (
              <div className="userlogin-loading"></div>
            ) : ("Login with OTP")}</button>
          </form>
          <div className="usersignup-forgot">
            <NavLink to='/signup'>signup</NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signin
