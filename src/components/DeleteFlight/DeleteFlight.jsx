import React, { useEffect, useState } from 'react';
// import "./AdminPage.css";
import Table from "../Table/Table";
import axios from 'axios';



export default function EditFlight (props) {
    const [flightId, setflightId] = useState('')
    const handleFlightId = (value)=>{
        setflightId(value);
    }
 
    const setDeleteData = (row) => {
        setflightId(row.id);
    }

    const submitForm = async (e) => {
        console.log("yayayay")
        // e.preventDefault();
        const formFields = {
            flightId,
        }
        console.log(formFields);
        const res  = await axios.post('http://localhost:3001/deleteFlight',{formFields});
    }

    


    if(props.show){
        return (
            <>
            <div>
                <Table
                    setRowsData={setDeleteData}
                />
            </div>
            <div className='remove-form-wrapper'>
                <form className='remove-textfield-form'>
                    <div>
                        <label>Flight ID:</label>
                        <input onChange={(value)=>{handleFlightId(value)}} value={flightId} type="text" name="textbox15" />
                    </div>
                    <button  onClick={(e)=> submitForm(e)} className='CommitChangesBtn1'>Commit Changes</button>
                </form>
            </div>
            </>
        )
    }
}
