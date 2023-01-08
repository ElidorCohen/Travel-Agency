import { useState, useEffect, useRef, useCallback } from "react";
import "./Deck.css";
import Seats from "../Seats/Seats";
import SeatsInfo from "../SeatsInfo/SeatsInfo";
const axios = require('axios')

export const  pickedSeats = []
export default function Deck ({ passengers_number, flight_info, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }){
    const takenSeats = []
    const [passengerNumber,setPassengerNumber] = useState(()=>{return passengers_number})
    const [seatsComponenets, setSeatsComponenets] = useState([])
    const totalSeatPrice = useRef(0);
    console.log("passengers_number ", passengers_number)

    useEffect(()=>{
        console.log("flight_info" ,flight_info)

        const getTakenSeat = async () => {
            const res  = await axios.get('http://localhost:3001/getTakenSeats', {params:{'flightId':flight_info.flight.flight_id.id1}});
            res.data.map(element => {
                takenSeats.push(element.seat)
            })
            console.log('taken_seats ', takenSeats);
        }
        const initSeats = ()=>{
            let rowPrice = 100;
            let temp =[];
            for (let i = 1; i < 19 ; i++){
                switch(i){
                    case 5:
                        rowPrice = 200;
                        break;
                    case 9:
                        rowPrice = 400;
                        break;
                    case 15:
                        rowPrice = 600;
                        break;
                    default:
                        break;
                }
                temp.push(
                    <Seats
                        rowNumber={i}
                        passangerNumber={passengerNumber}
                        setPassengerNumber={setPassengerNumber}
                        rowPrice={rowPrice}
                    />
                )
            }
            setSeatsComponenets(temp);
        }
        const disableSeats = ()=>{
            takenSeats.map((element)=>{
                document.getElementById(`seat-${element}`).style.cursor = 'not-allowed'
                document.getElementById(`seat-${element}`).style.backgroundColor = 'gray'
                document.getElementById(`seat-${element}`).style.opacity = '0.5'
                document.getElementById(`seat-${element}`).ariaDisabled = 'true'
            })
        }
        let total = 0;
        Object.keys(pickedSeats).forEach((ele)=>{
            total += parseInt(pickedSeats[ele].price);
            console.log(pickedSeats[ele])
        })
        totalSeatPrice.current=total
        console.log(total)
        if(passengerNumber === 0){
            document.getElementById("payment_button").scrollIntoView({
                behavior: 'smooth', // Defines the transition animation. default: auto
                block: 'start', // Defines vertical alignment. default: start
                inline: 'start' // Defines horizontal alignment. default: nearest
            });
        }
        initSeats();
        getTakenSeat();
        console.log("WATSETASDT")
        setTimeout(()=>{
            disableSeats();
        }, 150)
    },[passengerNumber])


    return (
        <>
        <div className="deck_container">
            <div className="deck_componenet" style={{marginBottom: "30px"}}>       
                <div style={{'position':'relative', 'top':'10%'}}>
                    <div className='row-letter-container'>
                        <div className="row-letter">
                            <div className="seat_letter">A</div>
                            <div className="seat_letter">B</div>
                            <div className="seat_letter">C</div>
                        </div>
                        <div className="row-letter">
                            <div className="seat_letter">D</div>
                            <div className="seat_letter">E</div>
                            <div className="seat_letter">F</div>
                        </div>
                    </div>
                    {/* <Seats
                        rowNumber={1}
                        passangerNumber={passangerNumber}
                        setPassengerNumber={setPassengerNumber}
                        rowPrice={1000}
                    />
                    <Seats
                        rowNumber={2}
                        passangerNumber={passangerNumber}
                        setPassengerNumber={setPassengerNumber}
                        rowPrice={1020}
                    />
                    <Seats
                        rowNumber={3}
                        passangerNumber={passangerNumber}
                        setPassengerNumber={setPassengerNumber}
                        rowPrice={1200}
                    /> */}
                    {seatsComponenets}
                    <SeatsInfo
                        totalSeats={totalSeatPrice.current}
                        flight_info={flight_info}
                        pickedSeats={pickedSeats}
                    />
                    {/* {getCarrierLogo()}
                    {flightData()}
                    {price()} */}
                </div>
            </div>
        </div>
        </>
    )
}
