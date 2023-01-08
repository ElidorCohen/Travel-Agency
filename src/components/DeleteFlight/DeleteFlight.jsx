import React, { useEffect, useState } from 'react';
// import "./AdminPage.css";
import Table from "../Table/Table";




export default function EditFlight (props) {
    const [textBox, setTextBox] = useState('')
    const handleTextBox = (value)=>{
        setTextBox(value);
    }
 
    const setDeleteData = (row) => {
        setTextBox(row.id);
    }

    const submitForm = (e) => {
        console.log("yayayay")
        e.preventDefault();
        const formFields = {
            textBox,
        }
        console.log(formFields);
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
                        <input onChange={(value)=>{handleTextBox(value)}} value={textBox} type="text" name="textbox15" />
                    </div>
                    <button  onClick={(e)=> submitForm(e)} className='CommitChangesBtn1'>Commit Changes</button>
                </form>
            </div>
            </>
        )
    }
}
