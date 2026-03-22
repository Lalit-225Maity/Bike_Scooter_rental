import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Mybooking.css'
import { Helmet } from 'react-helmet';
const Mybookings = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/bookdetails');
        console.log(response.data.BookDetails);
        setbook(response.data.BookDetails)

      } catch (error) {

      }
    })()
  }, [])

  return (
    <div className='mybooking'>
      <Helmet>
        <title>Booking</title>
      </Helmet>
      <div className="booking-details">
        {book.map((i) => (
          <div className="booking-info">
            <div className="booking-product-image"><img src={i.model_image} alt="" /></div>
            <div className="booking-product-details">
              <h4>Hello {i.User_Name}</h4>
            <p>Recieve Date : {i.recieve_date}</p>
            <p>End Date : {i.end_date}</p>
            <p>Total Charges : {i.Payment_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mybookings
