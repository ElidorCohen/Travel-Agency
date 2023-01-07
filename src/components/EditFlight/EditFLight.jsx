import React, { useEffect, useState } from 'react';
import "./AdminPage.css";
import Header from "../components/Header/Header";




const editFlight = () => {
    const [destinaton, setDestinations] = useState('')
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
    const handleDorigin = (value)=>{
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

    if(editFormOpen){
        return (
            <div className="form-wrapper">
                <form className='textfieldform'>
                <div>
                    <label>Flight ID:</label>
                    <input type="text" name="textbox1" />
                </div>
                <div>
                    <label>Carrier:</label>
                    <input type="text" name="textbox2" />
                </div>
                <div>
                    <label>Destination:</label>
                    <input type="text" name="textbox3" />
                </div>
                <div>
                    <label>Origin:</label>
                    <input type="text" name="textbox4" />
                </div>
                <div>
                    <label>Origin Country:</label>
                    <input type="text" name="textbox5" />
                </div>
                <div>
                    <label>Destination Country:</label>
                    <input type="text" name="textbox6" />
                </div>
                <div>
                    <label>Departure Time:</label>
                    <input type="text" name="textbox7" />
                </div>
                <div>
                    <label>Landing Time:</label>
                    <input type="text" name="textbox8" />
                </div>
                <div>
                    <label>Seats Quantity:</label>
                    <input type="text" name="textbox9" />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" name="textbox10" />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" onChange={(value)=>{handleChange}} name="textbox11" />
                </div>
                <button onSubmit={()=>{handleSubmit}} className='CommitChangesBtn1'>Commit Changes</button>
                </form>
            </div>
        )
    }
}
export default editFlight;