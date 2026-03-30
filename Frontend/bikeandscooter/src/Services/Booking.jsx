import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import './Booking.css'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Booking = () => {
    const navigate = useNavigate();
    const [model, setmodel] = useState([]);
    const { state } = useLocation();
    const { selectcity, date, enddate } = state || {};
    const [details, setdetails] = useState([]);
    const [bikeselect, setbikeselect] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/book?cityname=${selectcity}`);
                console.log(response.data.FetchBike);
                setdetails(response.data.FetchBike);
            } catch (error) {
                console.log(error.response.data.message);
            }
        })();
    }, [selectcity])

    const prove = (i) => {
        console.log(i);
        setbikeselect(i);
        navigate('/checkout', { state: { product: i, selectcity: selectcity, date: date, enddate: enddate } });
    }
    useEffect(() => {
        (async () => {
            try {

                if (model.length > 0) {
                    const response = await axios.get('/api/filter', {
                        params: { model: model.join(',') }
                    })
                    setdetails(response.data.Filters);
                }
                else {
                    const response = await axios.get(`/api/book?cityname=${selectcity}`);
                    console.log(response.data.FetchBike);
                    setdetails(response.data.FetchBike);
                }
            } catch (error) {

            }
        })()
    }, [model])

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setmodel((i) => {
                const insertvalue = [...i, value];
                return insertvalue;
            })
        }
        else {
            setmodel((i) => {
                const remove = i.filter((j) => {
                    return j !== value
                })
                return remove;
            })

        }

    }
    return (
        <div className='booking'>
            <Helmet>
                <title>Booking</title>
                <meta name="description" content="This is Booking page" />
            </Helmet>
            <div className="sidebar">
                <h5>Vehicle Model</h5>
                <div className="bike-mmodels">
                    <label><input type="checkbox" name="bike" value="Hero Glamour" onChange={handleChange} />Hero Glamour</label>
                    <label><input type="checkbox" name="bike" value="Hero HF Deluxe" onChange={handleChange} />Hero HF Deluxe</label>
                    <label><input type="checkbox" name="bike" value="Hero Xtreme 200S" onChange={handleChange} />Hero Xtreme 200S</label>
                    <label><input type="checkbox" name="bike" value="Hero Pleasure Plus Blue" onChange={handleChange} />Hero Pleasure Plus Blue</label>
                    <label><input type="checkbox" name="bike" value="Hero Splendor City" onChange={handleChange} />Hero Splendor City</label>
                    <label><input type="checkbox" name="bike" value="Hero Xpulse Adventure" onChange={handleChange} />Hero Xpulse Adventure</label>
                    <label><input type="checkbox" name="bike" value="Hero Xpulse 200T 4V" onChange={handleChange} />Hero Xpulse 200T 4V</label>
                </div>
            </div>
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
            {!selectcity && (<h1 className="select-city-toast">Select City First</h1>)}
        </div>
    )
}

export default Booking
