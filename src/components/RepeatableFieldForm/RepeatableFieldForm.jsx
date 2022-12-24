import React, { useState , useEffect} from 'react';
import TextField from '@mui/material/TextField';
import "./RepeatableFieldForm.css";
import { Divider } from '@mui/material';


export default function RepeatableFieldForm({fieldsNum}) {
  // Use the useState hook to store the list of fields in state
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const addFields =async ()=>{
      for( let i = 0; i< fieldsNum; i++){
        fields.push({ id: fields.length + 1, value: '' })
      }
      setFields(fields)
    }
    addFields();
  }, []);



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
  
  return (
    <>
      <h1 style={{'textAlign':'center', 'paddingTop':'5px'}}>Passngers Info</h1>
      <form className="passengers_form">
        {/* {formFields} */}
        <div className='add_field_btn'>
          <button type="button"  onClick={addField}>
            Add Field
          </button>
        </div>
    </form>
    </>
  );
}
