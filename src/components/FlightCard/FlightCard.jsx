import { useState } from "react";
import {Link, useLocation } from 'react-router-dom';
import moment from 'moment'
import "./FlightCard.css";
import { useEffect } from "react";
import EL_AL_New_Logo from "../../images/logo-of-el-al-israel-airlines-1.svg"
import KLM_LOGO from "../../images/KLM-Logo.wine.svg"
import Button from '@mui/material/Button';

export default function FlightCard  ({flightObj1,flightObj2, fieldsValues}){
    console.log(flightObj1, flightObj2)
    // flightObj.price = 200
    const getCarrierLogo = () =>{
        return(
            <div className='carriers_logo_container'>
                <img className="logo_thumbnail" src={EL_AL_New_Logo}/>
                <img className="logo_thumbnail" src={KLM_LOGO}/>
            </div>
        )
    }

    const flightData = () =>{
        return(
            <div className='flights_details_container'>
                {/* {flightTime(moment(new Date(flightObj.departure_time)).format('HH:mm'),flightObj.origin,moment(new Date(flightObj.landing_time)).format('HH:mm'),flightObj.destination)} */}
                {flightTime(flightObj1.departure_time,flightObj1.origin,flightObj1.landing_time,flightObj1.destination)}
                {flightTime(flightObj2.departure_time,flightObj2.origin,flightObj2.landing_time,flightObj2.destination)}
            </div>
        )
    }

    const flightTime = (timeA,airportA,timeB,airportB) =>{
        return(
            <div className='flights_time_container'>
                {flightTimes(timeA,airportA)}
                <div className="somthing_in_between">
                    sdfasdfsadf
                </div>
                {flightTimes(timeB,airportB)}
            </div>
        )
    }

    const flightTimes = (time, airport) =>{
        return(
            <div className="flight_time_airport_container">
                <div className='flight_time'>
                    {time}
                </div>
                <div className='flight_airport'>
                    {airport}
                </div>
            </div>
        )
    }

    const price = () =>{
        return(
            <div className="price_Wrapper">
                <div className="price">
                    {flightObj1.price + flightObj2.price}$
                </div>
                <div className="button_div">
                    <Link 
                        to={{
                            pathname: '/PassengerDetails',
                        }}
                        state={{ 'fieldsNum':fieldsValues?.pass_num}}
                    >
                        <Button
                            variant="outlined"
                        >
                
                                Select that flight                        
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <>
        <div className="flight_card_container" style={{marginBottom: "30px"}}>       
            {getCarrierLogo()}
            {flightData()}
            {price()}
        </div>
        </>
    )
}
