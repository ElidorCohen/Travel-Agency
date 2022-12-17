import { useState } from "react";
import {Link, useLocation } from 'react-router-dom';
import moment from 'moment'
import "./FlightCard.css";
import { useEffect } from "react";
import EL_AL_New_Logo from "../../images/logo-of-el-al-israel-airlines-1.svg"
import KLM_LOGO from "../../images/KLM-Logo.wine.svg"
import Button from '@mui/material/Button';

export default function FlightCard  ({flightObj}){
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
                {flightTime(moment(new Date(flightObj.departure_time)).format('HH:mm'),flightObj.origin,moment(new Date(flightObj.landing_time)).format('HH:mm'),flightObj.destination)}
                {flightTime("12:00","LAX","08:00","TLV")}
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
                    200$
                </div>
                <div className="button_div">
                    <Button
                        variant="outlined"
                    >
                        <Link 
                            to={{
                                pathname: '/PassengerDetails',
                            }}
                            state={{ 'fieldsNum':3}}
                        >
                            SAELECTA BLATH
                        </Link>
                        
                    </Button>
                </div>
            </div>
        );
    }
    console.log("YAYAYAYAYAYAAYAYYYAYAYAY")
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
