import { useState } from "react";
import "./SeatPlaceHolder.css";
import SearchBar from "../SearchBar/SearchBar";



export default function SeatPlaceHolder ({ seatNumber, id }) {
    return (
        <>
            <div className='seat_ph_container'>
                <div className="seat" id={id}>
                    {seatNumber}
                </div>
            </div>
        </>
    )
}
