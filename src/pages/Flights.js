import React, { useEffect, useState } from 'react';
import { flagsPaths, games, eighthGames, quarterGames } from '../constants/games';
import ReactCountryFlag from "react-country-flag"
import "../App.css";
import FlightCard from "../components/FlightCard/FlightCard";
import SearchMenu from "../components/SearchMenu/SearchMenu";
import Header from "../components/Header/Header";

function Flights() {

  useEffect(() => {
    
  }, []);


  return (
    <>
      <div className='flight_wrapper' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="flight_result_container">
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
            <FlightCard/>
          </div>
          <div id="searchBar_container">
            <SearchMenu/>
          </div>
          {/* <div>
            <FlightSearch/>
          </div> */}
      </div>
     
    </>
  )
}

export default Flights;