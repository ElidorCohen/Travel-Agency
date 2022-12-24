import { useEffect, useState } from "react";
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
                <div style={{'position':'absolute'}}>{rowPrice}$</div>
                <div className='seats_row_container' >
                    
                    <div className='seat_parent' aria-disabled='true'  onClick={(e)=>controller.pickSeat(e, passangerNumber, setPassengerNumber)}  > 
                        <Tooltip title={`Seat Price: ${rowPrice}$`}>
                            <div>
                                <SeatsPlaceHolder
                                    seatNumber={`A${rowNumber}`}
                                    id={`seat-A${rowNumber}`}
                                />
                            </div>
                        </Tooltip>
                    </div>
                    <div className='seat_parent' aria-disabled='false'  onClick={(e)=>controller.pickSeat(e,  passangerNumber, setPassengerNumber)}  > 
                        <Tooltip title={`Seat Price: ${rowPrice}$`}>
                            <div>
                                <SeatsPlaceHolder
                                    seatNumber={`B${rowNumber}`}
                                    id={`seat-B${rowNumber}`}
                                />
                            </div>
                        </Tooltip>
                    </div>
                    <div className='seat_parent' aria-disabled='false' onClick={(e)=>controller.pickSeat(e, passangerNumber, setPassengerNumber)}>
                        <Tooltip title={`Seat Price: ${rowPrice}$`}>                           
                            <div>                            
                                <SeatsPlaceHolder
                                    seatNumber={`C${rowNumber}`}
                                    id={`seat-C${rowNumber}`}
                                />
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className='seats_row_container'>
                    <div className='seat_parent' aria-disabled='true'  onClick={(e)=>controller.pickSeat(e, passangerNumber, setPassengerNumber)} > 
                        <Tooltip title={`Seat Price: ${rowPrice}$`}>
                            <div>
                                <SeatsPlaceHolder
                                    seatNumber={`D${rowNumber}`}
                                    id={`seat-D${rowNumber}`}
                                />
                            </div>
                        </Tooltip>
                    </div>
                    <div className='seat_parent' aria-disabled='false'  onClick={(e)=>controller.pickSeat(e, passangerNumber, setPassengerNumber)} > 
                        <Tooltip title={`Seat Price: ${rowPrice}$`}>
                            <div>
                                <SeatsPlaceHolder
                                    seatNumber={`E${rowNumber}`}
                                    id={`seat-E${rowNumber}`}
                                />
                            </div>
                        </Tooltip>
                    </div>
                    <div className='seat_parent' aria-disabled='false'  onClick={(e)=>controller.pickSeat(e, passangerNumber, setPassengerNumber)} > 
                        <Tooltip title={`Seat Price: ${rowPrice}$`}>
                            <div>
                                <SeatsPlaceHolder
                                    seatNumber={`F${rowNumber}`}
                                    id={`seat-F${rowNumber}`}
                                />
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </>
        )
    };

    return (
        <>
            <div className='seats_row' data-price={`${rowPrice}`}>
                {createSeatRows()}
            </div>
        </>
    )
}
