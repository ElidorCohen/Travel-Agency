import React, { useEffect, useState } from 'react';
// import "./AdminPage.css";
import Table from "../Table/Table";
import axios from 'axios';




export default function AddFlight (props) {
    const [flightId, setFlightId] = useState('')
    const [destination, setDestinations] = useState('')
    const [carrier, setCarrier] = useState('')
    const [origin, setOrigin] = useState('')
    const [origin_country, setOriginCountry] = useState('')
    const [destinaton_country, setDestinationsCountry] = useState('')
    const [departure_time, setDepartureTime] = useState('')
    const [seats_quantity, setSeatsQuantity] = useState('')
    const [landing_time, setLandingTime] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const handleDestination = (value)=>{
        setDestinations(value);
    }
    const handlecarrier = (value)=>{
        setCarrier(value);
    }
    const handleOrigin = (value)=>{
        setOrigin(value);
    }
    const handleOriginCountry = (value)=>{
        setOriginCountry(value);
    }
    const handleDestinationsCountry = (value)=>{
        setDestinationsCountry(value);
    }
    const handleDepartureTime = (value)=>{
        setDepartureTime(value);
    }
    const handleSeatsQuantity = (value)=>{
        setSeatsQuantity(value);
    }
    const handleLandingTime = (value)=>{
        setLandingTime(value);
    }
    const handlePrice = (value)=>{
        setPrice(value);
    }
    const handleDate = (value)=>{
        setDate(value);
    }

    const setEditData = (row) => {
        setFlightId(row.id)
        setDestinations(row.destination);
        setCarrier(row.carrier);
        setOrigin(row.origin);
        setOriginCountry(row.origin_country);
        setDestinationsCountry(row.destination_country);
        setDepartureTime(row.deprature_time);
        setSeatsQuantity(row.seats_left);
        setLandingTime(row.landing_time);
        setPrice(row.price);
        setDate(new Date(row.date));
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const formFields = {
            flightId,
            destination,
            carrier,
            origin,
            origin_country,
            destinaton_country,
            departure_time,
            seats_quantity,
            landing_time,
            price,
            date
        }
        const res  = await axios.post('http://localhost:3001/insertFlight',{formFields});
        console.log(res);
    }

    if(props.show){
        return (
            <>
            <div className="form-wrapper">
                <form className='textfieldform'>
                <div>
                    <label>Carrier:</label>
                    <input type="text" onChange={(e, value)=>{handlecarrier(e.target.value)}} value={carrier} name="textbox2" />
                </div>
                <div>
                    <label>Destination:</label>
                    <input type="text" onChange={(e, value)=>{handleDestination(e.target.value)}} value={destination}  name="textbox3" />
                </div>
                <div>
                    <label>Origin:</label>
                    <input type="text" onChange={(e, value)=>{handleOrigin(e.target.value)}} value={origin} name="textbox4" />
                </div>
                <div>
                    <label>Origin Country:</label>
                    <input type="text" onChange={(e, value)=>{handleOriginCountry(e.target.value)}}  value={origin_country} name="textbox5" />
                </div>
                <div>
                    <label>Destination Country:</label>
                    <input type="text" onChange={(e, value)=>{handleDestinationsCountry(e.target.value)}} value={destinaton_country} name="textbox6" />
                </div>
                <div>
                    <label>Departure Time:</label>
                    <input type="text" onChange={(e, value)=>{handleDepartureTime(e.target.value)}} value={departure_time} name="textbox7" />
                </div>
                <div>
                    <label>Landing Time:</label>
                    <input type="text" onChange={(e, value)=>{handleLandingTime(e.target.value)}} value={landing_time} name="textbox8" />
                </div>
                <div>
                    <label>Seats Quantity:</label>
                    <input type="text" onChange={(e, value)=>{handleSeatsQuantity(e.target.value)}} value={seats_quantity} name="textbox9" />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" onChange={(e, value)=>{handlePrice(e.target.value)}} value={price} name="textbox10" />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" onChange={(e, value)=>{handleDate(e.target.value)}} value={date} name="textbox11" />
                </div>
                <button  onClick={(e)=> submitForm(e)} className='CommitChangesBtn1'>Commit Changes</button>
                </form>
            </div>
            </>
        )
    }
}
