import React, { useEffect, useState } from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import "../App.css";
import FlightCard from "../components/FlightCard/FlightCard";
import SearchMenu from "../components/SearchMenu/SearchMenu";
import Header from "../components/Header/Header";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import moment from 'moment';

const axios = require('axios');

function Flights() {
  const location = useLocation();
  const [flights,setFlights] = useState([]);
  const [fieldsValues, setFieldValues] = useState(location.state);
  const [isLoading,setIsLoading] = useState(false);
  console.log("location ", fieldsValues)

  useEffect(() => {
    // Need to filter by Destination.
    // Need to filter By Origin.
    // Need to filter By available Seats.
    // Need to filter By One Way of Two Way.
    // Need to filter by date.
    const filteredFlights = [];
    const getFlights = async ()=>{ 
      setIsLoading(true);
      try{  
        const res  = await axios.get('http://localhost:3001/getFlights');
        console.log("flights " ,res.data);
        const FilteredByDestination =  res.data.filter(element => {
          return (
            (element.origin == fieldsValues.from.code && element.destination == fieldsValues.to.code) || (fieldsValues?.flight_type == "Round" ? (element.destination == fieldsValues.from.code && element.origin == fieldsValues.to.code) : false)
          );
        })
        console.log("FilteredByDestination ", FilteredByDestination);
        const FilteredByPassangers = FilteredByDestination.filter(element => {
          return (
            (element.seats_left >= fieldsValues.pass_num)
          );
        })
        const FilteredByDate = FilteredByPassangers.filter(element => {
          return (
            moment(element.date).format("DD/MM/YYYY") == moment(fieldsValues.departure_date).format("DD/MM/YYYY") || moment(element.date).format("DD/MM/YYYY") == moment(fieldsValues.landing_date).format("DD/MM/YYYY")
          );
        })
        setFlights(FilteredByPassangers);
        setIsLoading(false);
      } catch (e){
        console.warn(e);
      }
    }
    getFlights();
  }, [fieldsValues]);

  const loadFlights = () => {
    console.log("FLIGHTS! ", flights)
    if(!isLoading)
        return(
          <>
          {
            // mapping flights into object for more flexiable design as cards.
            flights?.map((element,i)=>{
              console.log(flights.length)
              if(fieldsValues.flight_type == "One-Way"){
                return(  
                  <FlightCard
                    flightObj1={element}
                    // flightObj2={flights[i+1]}
                    fieldsValues={fieldsValues}
                  />
                )
              }
              if(i+2 > flights.length) return;
                return(  
                  <FlightCard
                    flightObj1={flights[i]}
                    flightObj2={flights[i+1]}
                    fieldsValues={fieldsValues}
                  />
                )
              })
          }
          </>
        );
    else{

    }
  }


  return (
    <>
      <div className='flight_wrapper' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="flight_result_container">
            {!isLoading ? loadFlights() :
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
            }
          </div>
          <div id="searchBar_container">
            <SearchMenu
              fieldValues={fieldsValues}
              setFieldValues={setFieldValues}
            />
          </div>
      </div>
     
    </>
  )
}

export default Flights;