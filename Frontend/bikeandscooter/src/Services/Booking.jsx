import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import './Booking.css'
import { useNavigate } from 'react-router-dom';
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
                const params = {};
                if (model.length > 0) {
                    params.model = model; // only add if something is checked
                }
                if (model.length > 0) {
                    const response = await axios.get('/api/filter', { params })
                    console.log(response.data);

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
            <div className="sidebar">
                <h5>Vehicle Model</h5>
                <div className="bike-mmodels">
                    <label><input type="checkbox" name="bike" value="Glamour" onChange={handleChange} /> Glamour</label>
                    <label><input type="checkbox" name="bike" value="Destini 125" onChange={handleChange} /> Destini 125</label>
                    <label><input type="checkbox" name="bike" value="V2 Plus" onChange={handleChange} /> V2 Plus</label>
                    <label><input type="checkbox" name="bike" value="Pleasure Plus" onChange={handleChange} /> Pleasure Plus</label>
                    <label><input type="checkbox" name="bike" value="Xtreme 160 R" onChange={handleChange} /> Xtreme 160 R</label>
                    <label><input type="checkbox" name="bike" value="Xpulse 200 T 4V" onChange={handleChange} /> Xpulse 200 T 4V</label>
                    <label><input type="checkbox" name="bike" value="Xtreme 200 S" onChange={handleChange} /> Xtreme 200 S</label>
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
        </div>
    )
}

export default Booking
