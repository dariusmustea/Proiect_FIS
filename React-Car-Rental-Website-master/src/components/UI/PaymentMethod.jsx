import React, { useState } from "react";
import emailjs from 'emailjs-com';
import axios from "axios";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = ({ carId }) => {
  const [message, setMessage] = useState("");

  const handleReserve = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/reserve', { carId });

      // Obține detalii despre rezervare
      const reservationDetails = {
        carId,
        userName: "John Doe", // Înlocuiește cu numele utilizatorului real
        userEmail: "john.doe@example.com", // Înlocuiește cu e-mailul utilizatorului real
        reservationDate: new Date().toLocaleString()
      };

      // Trimite e-mailul de confirmare
      sendEmail(reservationDetails);
      
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  const sendEmail = (reservationDetails) => {
    const templateParams = {
      carId: reservationDetails.carId,
      userName: reservationDetails.userName,
      userEmail: reservationDetails.userEmail,
      reservationDate: reservationDetails.reservationDate
    };

    emailjs.send('service_n7t5q5g', 'template_e431o9d', templateParams, '09hPdqNCCNZT7ULD0')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Master Card
        </label>

        <img src={masterCard} alt="Master Card" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Paypal
        </label>

        <img src={paypal} alt="Paypal" />
      </div>

      <div className="payment text-end mt-5">
        <button onClick={handleReserve}>Reserve Now</button>
      </div>

      {message && <div className="mt-3 text-center">{message}</div>}
    </>
  );
};

export default PaymentMethod;
