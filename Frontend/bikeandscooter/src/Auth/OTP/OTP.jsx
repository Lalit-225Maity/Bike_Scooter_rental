import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './OTP.css'
const OTP = () => {
    const { state } = useLocation();
 const [otperr, setotperr] = useState(false);
 const [otperror, setotperror] = useState('')
    const { Email, User } = state || {};

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm();

    const OTPverify = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {

                    console.log(User);

                    const newData = {
                        ...data,
                        Email: Email
                    }
                    const response = await axios.post('/api/otpverify', newData);
                    console.log(response.data.verifyUser);
                    if (User) {
                        localStorage.setItem("User", JSON.stringify(User));
                    }
                    navigate('/')
                    resolve("success");
                    setotperr(false);
                } catch (error) {
                    console.log(error.response.data.message);
                    const err=error.response.data.message
                    setotperr(true);
                    setotperror(err);
                    reject();
                }
            }, 3000);
        })
    }
    return (
        <div className='otp'  >
            <div className="otp-verification">
                <h4>OTP Verification</h4>
                <form onSubmit={handleSubmit(OTPverify)} >
                    <p>We have just sent you a 6 digit verification code your registered email-id</p>
                    <TextField variant="outlined" label="OTP" type="text"    {...register("OTP")} required />
                    <button type="submit">{isSubmitting ? (
                        <div className="load-verify"></div>
                    ) : ("verify")}</button>
                </form>
               {otperr&&<p style={{color:"red"}}>{otperror}</p>}
            </div>
        </div>
    )
}

export default OTP
