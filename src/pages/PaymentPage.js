import React, { useEffect, useState } from 'react';
import "../App.css";
import Header from "../components/Header/Header";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import {Link, useParams, useLocation} from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function PaymentPage() {
  const location = useLocation();
  const flight_price = location.state.flight_info.flight.price
  const seats_price = location.state.seats_price
  console.log(flight_price , seats_price )
  const initialOptions = {
    "client-id": "Absxi56Eg7HVYWnXOfECoECywjwa-LN1ZJ1jBSvyfHG0XCDJsZzWvPwVHrcKSLnporBUSbNsR05MY1aM",
    currency: "USD",
    intent: "capture",
  };
  useEffect(() => {

  }, []);
  


  return (
    <>
      <div className='deck_wrapper' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="deck_container">
            <PayPalScriptProvider options={initialOptions}>
              <PaymentForm
                price={parseInt(flight_price) + parseInt(seats_price)}
              />
            </PayPalScriptProvider>
          </div>
      </div>
    </>
  )
}

export default PaymentPage;