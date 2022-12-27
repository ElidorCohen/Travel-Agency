import React, { useEffect, useState } from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import Button from '@mui/material/Button';


import "../App.css";
import RepeatableFieldForm from "../components/RepeatableFieldForm/RepeatableFieldForm";
import Header from "../components/Header/Header";
import TextField from '@mui/material/TextField';
// import "./RepeatableFieldForm.css";
import { Divider } from '@mui/material';

function PassangerDetails({flights_seats}) {
  flights_seats  = 7;
  // passing arguments through link elements.
  const location = useLocation();
  // const fieldsNum = location.state.fieldsNum
  const [fieldsNum, setFiledsNum] = useState(location.state.fieldsNum)

  const [fields, setFields] = useState([]);
  let fieldsArray = [];
  useEffect(() => {
    const addFields = async ()=>{
      for( let i = 0; i < fieldsNum; i++){
        console.log(i)
        fieldsArray.push({ id: i + 1, value: '' });
      }
      setFields(fieldsArray)
    };
    addFields();
  }, []);

  const params = useParams();
  console.log(params)

  const addPassanger = ()=>{
    if(fields.length < flights_seats){
      setFields([...fields, { id: fields.length + 1, value: '' }]);
    } else {
      window.alert("cant add anymore");
    }
  }


  const handleChange = (event, index) => {
    // Create a copy of the current fields list
    const updatedFields = [...fields];

    // Update the value of the field at the specified index
    updatedFields[index].value = event.target.value;

    // Set the updated fields list as the new state
    setFields(updatedFields);
  };

  const formFields = fields.map((field, index) => (
    <>
      <div className="passnger_fields_label">
        <label htmlFor={`field-${field.id}`}>Passenger {field.id}</label>
      </div>
      <div className="passenger_filed" key={field.id}>
        <div className='fields_row'>
          <TextField
            id={`name-field-${field.id}`}
            value={field.value}
            onChange={(event) => handleChange(event, index)}
            label="First Name"
          >
          </TextField>
          <TextField
            id={`ln-field-${field.id}`}
            value={field.value}
            onChange={(event) => handleChange(event, index)}
            label="Last Name"
          >
          </TextField>
        </div>
        <div className='fields_row'>
          <TextField
            id={`passport-field-${field.id}`}
            value={field.value}
            onChange={(event) => handleChange(event, index)}
            label="Passport number"
          >
          </TextField>
          <TextField
            id={`phone-field-${field.id}`}
            value={field.value}
            onChange={(event) => handleChange(event, index)}
            label="Phone Number"
          >
          </TextField>
        </div>
        <Divider
            style={{'paddingTop':'10px'}}
          />
      </div>
    </>
    ));
  


  return (
    <>
      <div className='passanger_page_container' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="passanger_form">
              {formFields}
              <div className="fields_btn">
                <Button onClick={addPassanger} variant="outlined">
                  Add Addition passanger
                </Button>
              </div>
          </div> 
          <div className="fields_btn">
          <Link 
                to={{
                    pathname: '/SeatsPicker',
                }}
                state={{ 'passangers':fields?.length}}
            >
            <Button variant="outlined">
              Select Seats
            </Button>
          </Link>
            

          </div>
          <div id="searchBar_container">
          </div>
      </div>
     
    </>
  )
}

export default PassangerDetails;