import { useState, useEffect } from "react";
import "./SeatsInfo.css";
import {Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import EL_AL_New_Logo from "../../images/logo-of-el-al-israel-airlines-1.svg"
import KLM_LOGO from "../../images/KLM-Logo.wine.svg"
import { pickedSeats } from "../Deck/Deck";

export default function SeatsInfo ({ totalSeats, flight_info, pickedSeats, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }){
    // calculate order price.
    // const calculatePrice = () => {
    //     let total;
    //     Object.keys(pickedSeats).forEach((ele)=>{
    //         total += ele.price;
    //     })
    //     console.log(total)
    //     return total;
    // }
    return (
        <>
        <div className="seats_info_container">
            <div className="seats_info_components">
                <div id="total">
                    <p>Extra Fee's:</p>
                    <p>{totalSeats}$</p>
                </div>
                <div id="payment_button">
                    <Button
                            variant="outlined"
                        >
                            <Link 
                                to={{
                                    pathname: '/PaymentPage',
                                }}
                                state={{ 
                                    'flight_info':flight_info,
                                    'seats_price':totalSeats,
                                    'pickedSeats':pickedSeats
                                }}
                            >
                                Procced to payment
                            </Link>
                            
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}
