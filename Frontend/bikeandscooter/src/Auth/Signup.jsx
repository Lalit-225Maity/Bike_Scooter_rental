import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import './Signup.css'
const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm();
    const CreateAccount = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(data);
                resolve("success")
                
            }, 3000);
        })
    }
    return (
        <div className='signup' style={{ marginTop: "10vh" }}>
            <form onSubmit={handleSubmit(CreateAccount)} >
                <TextField label="FirstName" type="text" variant="outlined" {...register("FirstName")} required />
                <TextField label="LasttName" type="text" variant="outlined" {...register("LasttName")} required />
                <TextField label="ContactInfo" type="text" variant="outlined" {...register("ContactInfo")} required />
                <TextField label="EmailID" type="email" variant="outlined" {...register("EmailID")} required />
                <label>Gender</label>
                <div className="gender-choose">
                    <input type="radio" value="Male" {...register("Gender")} id="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" value="Female" {...register("Gender")} id="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <button type="submit">{isSubmitting ? (
                    <div className="load-account"></div>
                ) : ("create account")}</button>
            </form>

        </div>
    )
}

export default Signup
