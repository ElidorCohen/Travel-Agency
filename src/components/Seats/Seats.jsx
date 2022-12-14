import { useState } from "react";
import "./Seats.css";
import SearchBar from "../SearchBar/SearchBar";
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';
import Tooltip from '@mui/material/Tooltip';


export default function FlightSearch ({ id, teamA, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }) {
    return (
        <>
            <div className='seats_row'>
                <div>
                    <Tooltip title="A1">
                        <EventSeatTwoToneIcon className='seat_icon' placement="top-start"/>
                    </Tooltip>
                    <Tooltip title="A2">
                        <EventSeatTwoToneIcon className='seat_icon' placement="top-start"/>
                    </Tooltip>
                    <Tooltip title="A3" placement="top">
                        <EventSeatTwoToneIcon className='seat_icon' />
                    </Tooltip>
                </div>
                <div>
                    <EventSeatTwoToneIcon className='seat_icon' />
                    <EventSeatTwoToneIcon className='seat_icon' />
                    <EventSeatTwoToneIcon className='seat_icon' />
                </div>            
            </div>
        </>
    )
}
