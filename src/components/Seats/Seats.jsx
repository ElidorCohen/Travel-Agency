import { useState } from "react";
import "./Seats.css";
import SearchBar from "../SearchBar/SearchBar";
import SeatsPlaceHolder from "../SeatPlaceHolder/SeatPlaceHolder";
import EventSeatTwoToneIcon from '@mui/icons-material/EventSeatTwoTone';
import Tooltip from '@mui/material/Tooltip';
import * as controller from "../../controllers/SeatPickerController";


export default function Seats ({ rowNumber, rowPrice, setPassengerNumber, passangerNumber }) {

    const createSeatRows = () => {
        return(
            <>
                <div className='seats_row_container' >
                    <div className='seat_parent' aria-disabled='true'  onClick={(e)=>controller.pickSeat(e, passangerNumber)}  > 
                            <SeatsPlaceHolder
                                seatNumber={`A${rowNumber}`}
                                id={`seat-A${rowNumber}`}
                                onClick={(e)=>controller.pickSeat(e)}
                            />
                    </div>
                    <div className='seat_parent' aria-disabled='false'  onClick={(e)=>controller.pickSeat(e,  passangerNumber)}  > 
                            <SeatsPlaceHolder
                                seatNumber={`B${rowNumber}`}
                                id={`seat-B${rowNumber}`}
                                onClick={(e)=>controller.pickSeat(e)}
                            />
                    </div>
                    <div className='seat_parent' aria-disabled='false' onClick={(e)=>controller.pickSeat(e, passangerNumber)}>
                            <SeatsPlaceHolder
                                seatNumber={`C${rowNumber}`}
                                id={`seat-C${rowNumber}`}
                            />
                    </div>
                </div>
                <div className='seats_row_container'>
                    <div className='seat_parent' aria-disabled='true'  onClick={(e)=>controller.pickSeat(e, passangerNumber)} > 
                            <SeatsPlaceHolder
                                seatNumber={`D${rowNumber}`}
                                id={`seat-D${rowNumber}`}
                                onClick={(e)=>controller.pickSeat(e)}
                            />
                    </div>
                    <div className='seat_parent' aria-disabled='false'  onClick={(e)=>controller.pickSeat(e, passangerNumber)} > 
                            <SeatsPlaceHolder
                                seatNumber={`E${rowNumber}`}
                                id={`seat-E${rowNumber}`}
                                onClick={(e)=>controller.pickSeat(e)}
                            />
                    </div>
                    <div className='seat_parent' aria-disabled='false'  onClick={(e)=>controller.pickSeat(e, passangerNumber)} > 
                            <SeatsPlaceHolder
                                seatNumber={`F${rowNumber}`}
                                id={`seat-F${rowNumber}`}
                                onClick={(e)=>controller.pickSeat(e)}
                            />
                    </div>
                </div>
            </>
        )
    };
    console.log('seats.js', rowPrice)

    return (
        <>
            <div className='seats_row' data-price={`${rowPrice}`}>
                {createSeatRows()}
            </div>
        </>
    )
}
