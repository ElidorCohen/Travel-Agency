import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import "./RepeatableFieldForm.css";
import { Divider } from '@mui/material';


export default function RepeatableFieldForm() {
  // Use the useState hook to store the list of fields in state
  const [fields, setFields] = useState([]);

  // Function to add a new field to the list
  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: '' }]);
  };

  // Function to handle changes to the field values
  const handleChange = (event, index) => {
    // Create a copy of the current fields list
    const updatedFields = [...fields];

    // Update the value of the field at the specified index
    updatedFields[index].value = event.target.value;

    // Set the updated fields list as the new state
    setFields(updatedFields);
  };

  // Map over the list of fields to create the form fields
  const formFields = fields.map((field, index) => (
  <>
    <div className="passnger_fields_label">
      <label htmlFor={`field-${field.id}`}>Passenger {field.id}</label>
    </div>
    <div className="passenger_filed" key={field.id}>
      <div className='fields_row'>
        <TextField
          id={`field-${field.id}`}
          value={field.value}
          onChange={(event) => handleChange(event, index)}
          label="First Name"
        >
        </TextField>
        <TextField
          id={`field-${field.id}`}
          value={field.value}
          onChange={(event) => handleChange(event, index)}
          label="Last Name"
        >
        </TextField>
      </div>
      <div className='fields_row'>
        <TextField
          id={`field-${field.id}`}
          value={field.value}
          onChange={(event) => handleChange(event, index)}
          label="Passport number"
        >
        </TextField>
        <TextField
          id={`field-${field.id}`}
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
      <h1 style={{'textAlign':'center', 'paddingTop':'5px'}}>Passngers Info</h1>
      <form className="passengers_form">
        {formFields}
        <div className='add_field_btn'>
          <button type="button"  onClick={addField}>
            Add Field
          </button>
        </div>
    </form>
    </>
  );
}
