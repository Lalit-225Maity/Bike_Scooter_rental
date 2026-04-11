import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
 
import './Signup.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [err, seterr] = useState(false);
    const [errmsg, seterrmsg] = useState('');
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm();
    const CreateAccount = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await axios.post('/api/signup', data);
                    console.log(response.data.Customer);

                    if (response) {
                        const response2 = await axios.post('/api/otp', data);
                        console.log(response2.data.OTPgenerate);

                    }
                    seterr(false);
                    navigate('/otp', { state: { Email: data.EmailID, User: data } });

                    resolve("success");
                } catch (error) {
                    reject("Failed")
                    const errs = error.response.data.message
                    seterrmsg(errs)
                    seterr(true);
                }
            }, 3000);
        })
        reset();
    }
    return (
        <div className='signup' >
      
            <form onSubmit={handleSubmit(CreateAccount)} >
                <TextField label="First Name" type="text" variant="outlined" {...register("FirstName")} required color="success" />
                <TextField label="Last Name" type="text" variant="outlined" {...register("LastName")} required color="success" />
                <TextField label="Contact Info" type="text" variant="outlined" {...register("ContactInfo")} required color="success" />
                <TextField label="Email ID" type="email" variant="outlined" {...register("EmailID")} required color="success" />
                <label>Gender</label>
                <div className="gender-choose">
                    <input type="radio" value="Male" {...register("Gender")} id="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" value="Female" {...register("Gender")} id="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <button type="submit"  >{isSubmitting ? (
                    <div className="load-account"></div>
                ) : ("create account")}</button>
                {err && <p style={{ color: "red" }}>{errmsg}</p>}
            </form>

        </div>
    )
}

export default Signup
