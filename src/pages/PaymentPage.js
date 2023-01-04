import React, { useEffect, useState } from 'react';
import "../App.css";
import Header from "../components/Header/Header";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import {Link, useParams, useLocation} from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function PaymentPage() {
  const location = useLocation();
  console.log(location.state)
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
              <PaymentForm/>
            </PayPalScriptProvider>
          </div>
      </div>
    </>
  )
}

export default PaymentPage;