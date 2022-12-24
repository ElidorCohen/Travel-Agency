import React, { useEffect, useState } from 'react';
import "../App.css";
import Header from "../components/Header/Header";
import Deck from "../components/Deck/Deck";

function Flights() {

  useEffect(() => {
    
  }, []);
  


  return (
    <>
      <div className='deck_wrapper' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="deck_container">
            <Deck 
              // passengerNumber={passengerNumber}
              // setPassengerNumber={setPassengerNumber}
            /> 
          </div>
      </div>
    </>
  )
}

export default Flights;