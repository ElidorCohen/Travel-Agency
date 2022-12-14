import { useState } from "react";
import "./header.css";


import ReactCountryFlag from "react-country-flag"
import { BiBarChart } from "react-icons/bi";
import { useEffect } from "react";


export default function Header ({ id, teamA, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }) {
    return (
        <>
            <div className='header'>
               <h1> Travel Marmelade </h1>
            </div>
        </>
    )
}
