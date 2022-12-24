import React, { useEffect, useState } from 'react';
import { flagsPaths, games, eighthGames, quarterGames } from '../constants/games';
import ReactCountryFlag from "react-country-flag";
import "../App.css";
import FlightCard from "../components/FlightCard/FlightCard";
import SearchMenu from "../components/SearchMenu/SearchMenu";
import Header from "../components/Header/Header";
const axios = require('axios');

function Flights() {
  const [flights,setFlights] = useState([]);

  useEffect(() => {
    const getFlights = async ()=>{
      try{  
        const res  = await axios.get('http://localhost:3001/getFlights');
        setFlights(res.data.flights);
      } catch (e){
        console.warn(e);
      }
    }
    getFlights();
  }, []);

  const loadFlights = () => {
    return(
      <>
      {
        flights?.map((element)=>{
          return(  
            <FlightCard
              flightObj={element}
            />
          )
        })
      }
      </>
    );
  }


  return (
    <>
      <div className='flight_wrapper' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="flight_result_container">
            {loadFlights()}
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