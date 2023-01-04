import React, { useEffect, useState } from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import "../App.css";
import FlightCard from "../components/FlightCard/FlightCard";
import SearchMenu from "../components/SearchMenu/SearchMenu";
import Header from "../components/Header/Header";
const axios = require('axios');

function Flights() {
  const location = useLocation();
  const [flights,setFlights] = useState([]);
  const [fieldsValues, setFieldValues] = useState(location.state);
  console.log("location ", fieldsValues)

  useEffect(() => {
    const getFlights = async ()=>{
      try{  
        const res  = await axios.get('http://localhost:3001/getFlights');
        console.log(res.data);
        setFlights(res.data);
      } catch (e){
        console.warn(e);
      }
    }
    getFlights();
  }, [fieldsValues]);

  const loadFlights = () => {
    return(
      <>
      {
        flights?.map((element,i)=>{
          if(i+1 > flights.length-2) return;
          
          console.log(`index 1 ${i}, index 2 ${i+1}`)
          return(  
            <FlightCard
              flightObj1={flights[i]}
              flightObj2={flights[i+2]}
              fieldsValues={fieldsValues}
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
            <SearchMenu
              fieldValues={fieldsValues}
              setFieldValues={setFieldValues}
            />
          </div>
          {/* <div>
            <FlightSearch/>
          </div> */}
      </div>
     
    </>
  )
}

export default Flights;