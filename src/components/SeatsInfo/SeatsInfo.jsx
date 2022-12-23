import { useState, useEffect } from "react";
import "./SeatsInfo.css";
import {Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import EL_AL_New_Logo from "../../images/logo-of-el-al-israel-airlines-1.svg"
import KLM_LOGO from "../../images/KLM-Logo.wine.svg"
import { pickedSeats } from "../Deck/Deck";

export default function SeatsInfo ({ logoa, logob, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }){
    const calculatePrice = () => {
        Object.keys(pickedSeats).forEach(()=>{
            
        })
    }
    return (
        <>
        <div className="seats_info_container">
            <div className="seats_info_components">
                sadasdfasd
                <Button
                        variant="outlined"
                    >
                        <Link 
                            to={{
                                pathname: '/PaymentPage',
                            }}
                            // state={{ 
                            //     'seats':[...seats],
                            //     'price':'price'
                            // }}
                        >
                            Procced to payment
                        </Link>
                        
                    </Button>
            </div>
        </div>
        </>
    )
}
