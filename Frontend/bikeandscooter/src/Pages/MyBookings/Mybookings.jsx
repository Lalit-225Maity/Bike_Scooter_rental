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
          <table>
             <thead>
               <tr>
                 <th scope='col' id='bikeimg'>#</th>
                <th scope="col">Book Details</th>
                <th scope="col">Client</th>
                <th scope="col">Bike Details</th>
               </tr>
             </thead>
             <tbody>
              <tr>
              <td>
                <img src={i.model_image} alt="" />
              </td>
                <td>
                  <p>Pick Up : {i.recieve_date}</p>
                  <p>Return : {i.end_date} </p>
                  <p>Amount : {i.Payment_price}</p>
                  <p>Status : {i.Payment_status}</p>
                </td>

                <td>
                  <p>Name : {i.User_FirstName} {i.User_LastName} </p>
                  <p>Email : {i.User_Email}</p>
                  <p>Contact : {i.User_Contact}</p>
                </td>
                <td>
                  <p>Model Name : {i.model_name}</p>
                </td>
              </tr>
              
             </tbody>
          </table>
        ))}
      </div>
    </div>
  )
}

export default Mybookings
