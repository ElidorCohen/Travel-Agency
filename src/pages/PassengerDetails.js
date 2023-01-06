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
  const [fields, setFields] = useState([{ field1: '', field2: '', field3: '', field4: '' }]);

  const addBlock = () => {
    if(fields.length < location.state.seats_left ){
        setFields((prevFields) => [...prevFields, { field1: '', field2: '', field3: '', field4: '' }]);
        return;
    }
    alert("cant add anymore");
  };

  const removeBlock = (index) => {
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields.splice(index, 1);
      return newFields;
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index][name] = value;
      return newFields;
    });
  };

  // const [fields, setFields] = useState([]);
  let fieldsArray = [];
  useEffect(() => {
    const addFields = async ()=>{
        for( let i = 0; i < fieldsNum; i++){
          fieldsArray.push({ field1: '', field2: '', field3: '', field4: '' });
        }
        setFields(fieldsArray)
    };
    addFields();
  }, []);

  const params = useParams();
  console.log(params)

  // const addPassanger = ()=>{
  //   if(fields.length < flights_seats){
  //     setFields([...fields, { id: fields.length + 1, value: '' }]);
  //   } else {
  //     window.alert("cant add anymore");
  //   }
  // }


  // const handleChange = (event, index) => {
  //   // Create a copy of the current fields list
  //   const updatedFields = [...fields];

  //   // Update the value of the field at the specified index
  //   updatedFields[index].value = event.target.value;

  //   // Set the updated fields list as the new state
  //   setFields(updatedFields);
  // };

  const formFields = fields.map((field, index) => (
    <>
      <div className="passnger_fields_label">
        <label htmlFor={`field-${field.id}`}>Passenger {index+1}</label>
      </div>
      <div className="passenger_filed" key={field.id}>
        <div className='fields_row'>
          <TextField
            type="text"
            name="field1"
            value={field.field1}
            onChange={(e) => handleChange(e, index)}
            label="First Name"
          >
          </TextField>
          <TextField
           type="text"
           name="field2"
           value={field.field2}
           onChange={(e) => handleChange(e, index)}
            label="Last Name"
          >
          </TextField>
        </div>
        <div className='fields_row'>
          <TextField
            type="text"
            name="field3"
            value={field.field3}
            onChange={(e) => handleChange(e, index)}
            label="Passport number"
          >
          </TextField>
          <TextField
            type="text"
            name="field4"
            value={field.field4}
            onChange={(e) => handleChange(e, index)}
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
                <Button onClick={addBlock} variant="outlined">
                  Add Addition passanger
                </Button>
                <Button onClick={removeBlock} variant="outlined">
                  Remove Passanger
                </Button>
              </div>
          </div> 
          <div className="fields_btn">
          <Link 
                to={{
                    pathname: '/SeatsPicker',
                }}
                state={{ 
                    'passangers':fields?.length,
                    'flight':location.state,
                    'passangers_fields':fields
                }}
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