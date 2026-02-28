import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import city from './City';
import './Home.css'
import { useForm } from 'react-hook-form'
const Home = () => {
  const navigate = useNavigate();
  const [cities, setcities] = useState(false);
  const [startdate, setstartdate] = useState();
  const [enddate, setenddate] = useState();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const changepage = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const Change = {
          ...data,
          start_date: startdate.toLocaleDateString("en-IN"),
          end_date: enddate.toLocaleDateString("en-IN")
        }
        resolve("success");
        console.log(Change);

      }, 3000);
    })
     

  }
  return (
    <div className='home'>
      <div className="nav-body" >
        <div className="nav-body-details">
          <h4>Two Wheeler Rentals</h4>
          <h2>Best Scooty and Bike Rentals in Your City</h2>
          <p>Get the best two-wheeler rental solution for your travel needs.</p>
          <h4 style={{ color: "grey" }}>Search your next ride</h4>
          <div className="select-vehicle">
            <form onSubmit={handleSubmit(changepage)}  
             autoComplete="off">
              <div className="select-city">
                <img src="/location (1).png" alt="Error" />
                <input type="text" {...register("Select_City")} onClick={() => {
                  setcities(true);

                }} readOnly/>
              </div>
              <div className="start-date">
                <DatePicker
                  selected={startdate}
                  onChange={(e) => { setstartdate(e); setValue("start_date", e) }}
                  minDate={new Date()}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='start-date'
                />
                <input type="hidden" {...register("start_date")} />
              </div>
              <div className="end-date">
                <DatePicker
                  selected={enddate}
                  onChange={(e) => { setenddate(e); setValue("end_date", e) }}
                  minDate={new Date().setDate(new Date().getDate()+1)}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='end-date'
                
                />
                <input type="hidden" {...register("end_date")} />
              </div>
              <button type="submit"><img src="/search-interface-symbol.png" alt="Error" /></button>
              {isSubmitting && (
                <div className="search-bikes">
                  <div className="loading"></div>
                  <div className="load">
                    <p>Please wait......</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
      {cities && (
        <div className="city-available">
          <span onClick={() => { setcities(false); }}>X</span>
          {city.map((i) => (
            <div className="choose-city" onClick={(e) => { setValue("Select_City", i.name); setcities(false); e.stopPropagation() }}>
              <img src={i.image} alt="Error" />
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
