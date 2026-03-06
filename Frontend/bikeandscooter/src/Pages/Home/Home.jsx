import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import city from './City';
import './Home.css'
import { useNavigate } from 'react-router-dom';
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
          start_date: startdate,
          end_date: enddate
        }
        navigate('/booking', { state: { selectcity: Change.Select_City, date: Change.start_date, enddate: Change.end_date } })
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
          <h2 style={{ fontSize: "38px", fontWeight: "700" }}>Best Scooty and Bike Rentals in Your City</h2>
          <p>Get the best two-wheeler rental solution for your travel needs.</p>
          <div className="select-vehicle">
            <h4 style={{ color: "#44444E" }}>Search your next ride</h4>
            <form onSubmit={handleSubmit(changepage)}
              autoComplete="off">

              <div className="select-city">
                <img src="/location (1).png" alt="Error" />
                <input type="text" placeholder='select city' {...register("Select_City")} onClick={() => {
                  setcities(true);

                }} readOnly />
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
                  minDate={startdate ? new Date().setDate(startdate.getDate() + 1) : ''}
                  disabled={!startdate}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='end-date'

                />
                <input type="hidden" {...register("end_date")} />
              </div>
              <button type="submit" id='submit'><img src="/search-interface-symbol.png" alt="Error" /></button>
              {isSubmitting && (
                <div className="search-bikes">
                  <div className="load">
                    <div className="loading"></div>
                    <p>Please wait......</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
      {cities && (
        <div className="city-overlay" onClick={() => setcities(false)}>

          <div className="city-available" onClick={(e) => e.stopPropagation()}>
            <div className="select-city-popover">
              <h4>Select city</h4>
              <span className="close-btn" onClick={() => setcities(false)}>X</span>
            </div>
            {city.map((i) => (
              <div
                className="choose-city"
                onClick={() => {
                  setValue("Select_City", i.name);
                  setcities(false);
                }}
              >
                <img src={i.image} alt="Error" />
                <p>{i.name}</p>
              </div>
            ))}

          </div>

        </div>
      )}
    </div>
  )
}

export default Home
