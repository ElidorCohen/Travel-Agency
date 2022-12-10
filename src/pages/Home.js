import React, { useEffect, useState } from 'react';
import { flagsPaths, games, eighthGames, quarterGames } from '../constants/games';
import ReactCountryFlag from "react-country-flag"
import "../App.css";
import FlightSearch from "../components/FlightSearch/FlightSearch";
import Header from "../components/Header/Header";
function Home() {

  useEffect(() => {
    
  }, []);


  return (
    <>
      <div className='homePage' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div>
            <FlightSearch/>
          </div>
          {/* <div>
            <FlightSearch/>
          </div> */}
      </div>
     
    </>
  )
}

export default Home;