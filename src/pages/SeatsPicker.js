import React, { useEffect, useState } from 'react';
import "../App.css";
import Header from "../components/Header/Header";
import Deck from "../components/Deck/Deck";
import {Link, useParams, useLocation} from 'react-router-dom';


function SeatsPicker() {
  const location = useLocation();
  console.log("location.state ", location.state)

  // useEffect(() => {
    
  // }, []);
  
  

  return (
    <>
      <div className='deck_wrapper' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="deck_container">
            <Deck 
              flight_info={location.state}
              passengers_number={location.state.passangers}
              // setPassengerNumber={setPassengerNumber}
            /> 
          </div>
      </div>
    </>
  )
}

export default SeatsPicker;