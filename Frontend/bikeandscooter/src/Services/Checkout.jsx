import React from 'react'
import { useLocation } from 'react-router-dom'
import './Checkout.css'
import { useEffect } from 'react';
import { useState } from 'react';
const Checkout = () => {
    const { state } = useLocation();
    const [col, setcol] = useState(true);
    const [after, setafter] = useState();
    const { product, date, enddate, selectcity } = state || {};
    const [result, setresult] = useState();
    const [timatable, settimatable] = useState(true);
    const [afternoon, setafternoon] = useState(false);
    const [time, settime] = useState();
    useEffect(() => {
        const startdate = new Date(date);
        const endate = new Date(enddate)
        const calulate = Math.abs(Math.ceil((endate - startdate) / (1000 * 60 * 60 * 24)));
        console.log(calulate);
        setresult(calulate);
    }, [date, enddate])


    const Morning = () => {
        if (timatable === false) {
            settimatable(true);
            setafternoon(false);


        }
    }


    const Afternoon = () => {
        if (timatable === true) {
            setafternoon(true);
            settimatable(false);
        }
    }
    return (
        <div className='checkout'>
            <div className="bike-chekout">
                <div className="bike-details-check">
                    <img src={product.image} alt="Error" id='productimage' />
                    <div className="product">
                        <div className="product-full-detail">
                            <h2>Product Details</h2>
                            <h3>{product.name}</h3>
                            <div className="product-details">

                                <p> <img src="/location (1).png" alt="" id='location' />{selectcity}</p>
                                <div className="dates-select">
                                    <p>{new Date(date).toDateString()}</p>
                                    <p>-------------------------</p>
                                    <p>{new Date(enddate).toDateString()}</p>
                                    <button>{result} Days</button>
                                </div>

                            </div>
                        </div>
                        <div className="additional">
                            <h2>Additional Details</h2>
                            <div className="fine">
                                <div className="fine-image">
                                    <img src="/penalty.png" alt="Error" id='finepay' />
                                    <p>Late Return Penalty</p>
                                </div>
                                <p>₹499/Day</p>

                            </div>
                        </div>
                    </div>
                    <div className="time-slot" >
                        <div className="morning" style={col ? { backgroundColor: "#B0FFFA" } : null} onClick={()=>{ setcol(true);setafter(false);Morning();}}>
                            <img src="/sunrise.png" alt="" />
                            <h4>Morning</h4>
                        </div>
                        <div className="afternoon" onClick={(e) => {
                            e.stopPropagation(); Afternoon(); setcol(false);setafter(true);
                        }} style={after?{backgroundColor:"#B0FFFA"}:null}>
                            <img src="/weather.png" alt="Error" />
                            <h4>Afternoon</h4>
                        </div>
                    </div>
                    {timatable && (
                        <div className="am"     >
                            <input type="radio" name="morning" id="1" value="09:00 AM - 10:00 AM" checked={time === "09:00 AM - 10:00 AM"} onChange={(e) => { settime(e.target.value) }} />
                            <label htmlFor="1"  >09:00 AM - 10:00 AM</label>
                            <input type="radio" name="morning" id="2" value="10:00 AM - 11:00 AM" checked={time === "10:00 AM - 11:00 AM"} onChange={(e) => { settime(e.target.value) }} />
                            <label htmlFor="2">10:00 AM - 11:00 AM</label>
                            <input type="radio" name="morning" id="3" value="11:00 AM - 12:00 PM" checked={time === "11:00 AM - 12:00 PM"} onChange={(e) => { settime(e.target.value) }} />
                            <label htmlFor="3">11:00 AM - 12:00 PM</label>
                        </div>
                    )}
                    {afternoon && (
                        <div className="pm" onClick={(e) => { e.stopPropagation() }}>
                            <input type="radio" name="afternoon" id="4" value={"12:00 PM - 1:00 PM"} checked={time === "12:00 PM - 1:00 PM"} onChange={(e) => { settime(e.target.value) }} />
                            <label htmlFor="4">12:00 PM - 1:00 PM</label>
                            <input type="radio" name="afternoon" id="5" checked={time === "1:00 PM - 2:00 PM"} onChange={(e) => { settime(e.target.value) }} value={"1:00 PM - 2:00 PM"} />
                            <label htmlFor="5">1:00 PM - 2:00 PM</label>
                            <input type="radio" name="afternoon" id="6" checked={time === "2:00 PM - 3:00 PM"} onChange={(e) => { settime(e.target.value) }} value={"2:00 PM - 3:00 PM"} />
                            <label htmlFor="6">2:00 PM - 3:00 PM</label>
                            <input type="radio" name="afternoon" id="7" checked={time === "3:00 PM - 4:00 PM"} onChange={(e) => { settime(e.target.value) }} value={"3:00 PM - 4:00 PM"} />
                            <label htmlFor="7">3:00 PM - 4:00 PM</label>
                        </div>
                    )}

                </div>
                <p>{time}</p>
                <div className="billing-details">
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout
