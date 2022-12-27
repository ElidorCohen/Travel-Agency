import React, { useEffect, useState } from 'react';
import "../App.css";
import Header from "../components/Header/Header";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import {Link, useParams, useLocation} from 'react-router-dom';


function PaymentPage() {
  const location = useLocation();
  console.log(location.state)

  useEffect(() => {
    
  }, []);
  


  return (
    <>
      <div className='deck_wrapper' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="deck_container">
            <PaymentForm/>
          </div>
      </div>
    </>
  )
}

export default PaymentPage;