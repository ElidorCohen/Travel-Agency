import { useState } from "react";
import "./flightSearch.css";
import SearchBar from "../SearchBar/SearchBar";


import ReactCountryFlag from "react-country-flag"
import { BiBarChart } from "react-icons/bi";
import { useEffect } from "react";


export default function FlightSearch ({ id, teamA, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }) {
    return (
        <>
            <div className='flight_search_container'>
                <SearchBar/>
            </div>
        </>
    )
}
