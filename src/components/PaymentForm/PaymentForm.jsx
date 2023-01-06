import { useState, useEffect, useRef, useCallback } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "./PaymentForm.css";
import Header from "../Header/Header";
import PayPalButton from "../PayPalButton/PayPalButton";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PaymentForm (props){
    const lables=['First Name', 'Last Name', 'ID','Phone number', 'Credit card number','CVV']
    const [fields, setFields] = useState([]);

    const temp=[];
    useEffect(()=>{
        const creatFields = ()=>{
            for(let i=0; i < 6; i++){
                temp.push({
                    id: i + 1,
                    value:'',
                    label:lables[i]
                })
            }
            setFields(temp);
        }
        creatFields();
    },[])
    const handleChange = (event, index) => {
        console.log(index)
        // Create a copy of the current fields list
        const updatedFields = [...fields];
    
        // Update the value of the field at the specified index
        updatedFields[index].value = event.target.value;
        console.log(updatedFields[index].value = event.target.value)
        console.log(updatedFields)
    
        // Set the updated fields list as the new state
        setFields(updatedFields);
      };
    
    const formFields = fields.map((field, index) => (
        <>
            <div className="payment_filed" key={field.id}>
                <TextField
                    fontSize="inherit" 
                    variant="filled"
                    id={`field-${field.id}`}
                    value={field.value}
                    onChange={(event) => handleChange(event, index)}
                    label={field.label}
                >
                </TextField>
            </div>
        </>
    ));
      
    

    return (
        <>
        <div className="payment_componenet payment_container">
            <h3 style={{paddingTop:'20px', height:'10%'}}>Payment Page</h3>
            <div className="payment_form " style={{marginBottom: "30px"}}>       
                {/* <div className='fields_row'>
                <TextField
                    id={`name-field-${field.id}`}
                    value={field.value}
                    onChange={(event) => handleChange(event, index)}
                    label="First Name"
                >
                </TextField>
                <TextField
                    id={`lm-field-${field.id}`}
                    value={field.value}
                    onChange={(event) => handleChange(event, index)}
                    label="Last Name"
                >
                </TextField>
                </div> */}
                {formFields}
            </div>
            <div>
                <h3>Order Total</h3>
                <br/>
                <h4>{props.price} $</h4>
            </div>
            <div id="proccess_payment_button">
                <Button
                    variant="outlined"
                >
                    Approve Payment     
                </Button>
                {/* <Button
                    variant="Filled"
                >
                    Pay with Paypal    
                </Button> */}
            </div>
            <div >
                <PayPalButton
                    amount={120}
                />
            </div>
        </div>
        </>
    )
}
