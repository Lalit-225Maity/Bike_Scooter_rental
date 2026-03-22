import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Payment.css'
import TextField from '@mui/material/TextField';
import { Helmet } from 'react-helmet';
const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { result, towns } = state || {};
  const [UPI, setUPI] = useState(false);
  const [method, setmethod] = useState('');
  const [QR, setQR] = useState(false);
  const [debit, setdebit] = useState(false);
  const total = Number(result) * 499;
  const {
    register: upiregister,
    handleSubmit: upisubmit,

    formState: { isSubmitting: upisubmitting }
  } = useForm();
  const {
    register: debitregister,
    handleSubmit: debitsubmit,

    formState: { isSubmitting: debitsumitting }
  } = useForm();
  const UPIPaymentsubmit = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          console.log(data);

          const paymentData = {
            ...data, method: method, Price: total
          };

          const response = await axios.post('/api/payment', paymentData, { withCredentials: true });
          console.log(response.data);
          navigate('/mybooking')
          resolve();
        } catch (error) {
          reject();
          console.log(error.response.data.message);

        }
      }, 3000);
    })
  }

  const DebitPaymentsubmit = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          console.log(data);

          const paymentData = {
            ...data, method: method, Price: total
          };

          const response = await axios.post('/api/payment', paymentData, { withCredentials: true });
          console.log(response.data);
          navigate('/mybooking')
          resolve();
        } catch (error) {
          reject();
          console.log(error.response.data.message);

        }
      }, 3000);
    })
  }







  return (
    <div className='pay'  >
      <Helmet>
        <title>Payment</title>
        <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/128/4575/4575124.png" type="image/x-icon" />
      </Helmet>
      <div className="billing">
        <h4>Billing Details</h4>
        <div className="billing-package">
          <p>Package Charges</p>
          <p>₹{total}</p>
        </div>
        <div className="total-amount">
          <h4>Total Amount</h4>
          <p>₹{total}</p>
        </div>
        <div className="note">
          <h4>Note:</h4>
          <p>Security deposit might be collected at the Hub during Pickup</p>
        </div>
      </div>
      <div className="billing-methods">
        <div className="payment-options">
          <h4>Payment Options</h4>
          <div className="upi-payment" onClick={(e) => { setUPI(true); setdebit(false); setQR(false); setmethod("UPI"); e.stopPropagation() }}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-bhim-icon-svg-download-png-69845.png" alt="" />
            <h4>UPI</h4>
          </div>

          <div className="debit-payment" onClick={(e) => { setUPI(false); setdebit(true); setQR(false); setmethod("CARD"); e.stopPropagation() }}>
            <img src="/credit-card.png" alt="" />
            <h4>Debit Card</h4>

          </div>
          <div className="debit-payment" onClick={(e) => { setUPI(false); setdebit(false); setQR(true); setmethod("QR CODE"); e.stopPropagation() }}>
            <img src="/scan.png" alt="" />
            <h4>QR Code</h4>
          </div>
        </div>
        <div className="payment-form-side" onClick={(e) => e.stopPropagation()}>
          {UPI && (
            <form onSubmit={upisubmit(UPIPaymentsubmit)}>
              <h4>Pay via UPI</h4>
              <TextField {...upiregister("UPI")} variant="outlined" label="UPI ID" />
              <button type="submit">{upisubmitting ? (
                <div className="upi-process"></div>
              ) : ("Pay")}</button>
            </form>
          )}
          {debit && (
            <form onSubmit={debitsubmit(DebitPaymentsubmit)}>
              <h4>Pay using Debit Card</h4>
              <TextField label="Debit Card" {...debitregister("Debit")} variant="outlined" />
              <TextField label="Password" {...debitregister("Debit_Password")} variant="outlined" />
              <button type="submit">{debitsumitting ? (
                <div className="upi-process"></div>
              ) : ("Pay")}</button>
            </form>
          )}
          {QR && (
            <form  >
              <h4>Scan here</h4>
              <QRCodeCanvas value={`upi://pay?pa=lalit@oksbi&pn=Lalit%20Maity&am=${total}&cu=INR`} size={200} includeMargin={true} fgColor='#aaa' />
            </form>
          )}
        </div>

      </div>
    </div>
  )
}

export default Payment
