import { useState, useEffect } from "react";
import "./Deck.css";
import Seats from "../Seats/Seats";
import SeatsInfo from "../SeatsInfo/SeatsInfo";

import EL_AL_New_Logo from "../../images/logo-of-el-al-israel-airlines-1.svg"
import KLM_LOGO from "../../images/KLM-Logo.wine.svg"
import Button from '@mui/material/Button';

export default function Deck ({ logoa, logob, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }){

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
                {flightTime("06:00","LAV","08:00","TLV")}
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
                        SAELECTA BLATH
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <>
        <div className="deck_container">
            <div className="deck_componenet" style={{marginBottom: "30px"}}>       
                <div style={{'position':'relative', 'top':'10%'}}>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <Seats/>
                    <SeatsInfo/>
                    {/* {getCarrierLogo()}
                    {flightData()}
                    {price()} */}
                </div>
            </div>
        </div>
        </>
    )
}
