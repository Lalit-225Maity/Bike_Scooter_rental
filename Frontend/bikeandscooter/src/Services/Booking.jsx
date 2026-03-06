import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import './Booking.css'
import { useNavigate } from 'react-router-dom';
const Booking = () => {
    const navigate=useNavigate();
    const { state } = useLocation();
    const { selectcity, date, enddate } = state || {};
    const [details, setdetails] = useState([]);
    const [bikeselect, setbikeselect] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/book?cityname=${selectcity}`);
                console.log(response.data.user);
                
                setdetails(response.data.user);
            } catch (error) {
                console.log(error.response.data.message);
            }
        })();
    }, [selectcity])
    const prove = (i) => {
        console.log(i);
        setbikeselect(i);
        navigate('/checkout',{state:{product:i,selectcity: selectcity, date: date, enddate: enddate }});
    }
    return (
        <div className='booking'>
            <div className="card">
                {details.map((i) => (
                    <div className="bike-details">
                        <img src={i.image} alt="" />
                        <h4>{i.name}</h4>
                        <div className="price-milage">
                            <h4>₹{i.price}</h4>
                            <div className="speed">
                                <p><img src="/speedometer.png" alt="" />{i.mileage} km</p>
                                <p><img src="/invoice.png" alt="" />{i.payment}</p>
                            </div>
                        </div>
                        <button className='book-vehicle'
                            onClick={() => { prove(i) }}
                        >Book Vehicle</button>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Booking
