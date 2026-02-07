import React, { useEffect, useState } from 'react'
import './Navbody.css'
import { useNavigate } from 'react-router-dom'
import { DayPicker, Select } from "react-day-picker";
import "react-day-picker/style.css";
import city from './City';
const Navbody = () => {
  const navigate = useNavigate();
  const [cities, setcities] = useState(false);
  const [limit, setlimit] = useState();
  const [selectcity, setselectcity] = useState();
  const [date, setdate] = useState();
  const [dateselect, setdateselect] = useState(false);
  const [enddate, setenddate] = useState();
  const [endconfirm, setendconfirm] = useState(false);
  const [mess, setmess] = useState('');
  useEffect(() => {
    const today = new Date();
    console.log(today);
    

    setlimit(today.toLocaleDateString());
    console.log(limit);

  }, [limit])
  const open = () => {
    if (date) {
      setendconfirm(true);
    }
    else {
      setendconfirm(false);
    }
  }
  const changepage = () => {
    if (enddate) {
      navigate('/booking', { state: { selectcity: selectcity, date: date, enddate: enddate } });
      setmess('');
    }
    else {
      setmess('Select the city,starting and ending date');
    }
  }


  return (
    <div className='/'>
      <div className="nav-body" onClick={() => { setdateselect(false); setendconfirm(false) }}  >
        <div className="nav-body-details">
          <h4>Two Wheeler Rentals</h4>
          <h2>Best Scooty and Bike Rentals in Goa</h2>
          <p>Get the best two-wheeler rental solution for your travel needs.</p>
          <h4 style={{ color: "grey" }}>Search your next ride</h4>
          <div className="select-vehical" >

            <div className="city-vehical-date">
              <div className="city" onClick={() => { setcities(true) }}><img src="/location.png" alt="" /><input type="text" placeholder='select city' value={selectcity ? selectcity : ''} /></div>

              <input type="text" placeholder='start-date' value={date ? date.toLocaleDateString() : ''} onClick={(e) => { e.stopPropagation(); setdateselect(true); }} readOnly id='start' />
              {dateselect && (
                <div className="calender" onClick={(e) => { e.stopPropagation() }}>
                  <DayPicker mode="single" onSelect={setdate} disabled={{ before: limit }} />
                </div>
              )

              }



              <input type="text" placeholder='end-date' onClick={(e) => { e.stopPropagation(); open() }} value={enddate ? enddate.toLocaleDateString() : ''} readOnly id='end' />
              {endconfirm && (
                <div className="calender-end" onClick={(e) => { e.stopPropagation() }}>
                  <DayPicker mode='single' onSelect={setenddate} disabled={{ before: limit }} />
                </div>
              )}

            </div>

            <img src="/search-interface-symbol.png" alt="" onClick={changepage} id='search' />


          </div>
          <p style={{ color: "red" }}>{mess}</p>
        </div>

        {cities && (
          <div className="city-choose">
            <div className="city-container">
              <div className="header">
                <h3>select city</h3>
                <span onClick={() => { setcities(false) }}>X</span>
              </div>
              <div className="city-details-container">
                {city.map((i) => (
                  <div className="city-details" onClick={() => { setselectcity(i.name); setcities(false) }}>
                    <img src={i.image} alt="" />
                    <p>{i.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbody
