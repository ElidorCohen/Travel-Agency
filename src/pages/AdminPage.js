import React, { useEffect, useState } from 'react';
import "./AdminPage.css";
import Header from "../components/Header/Header";
import EditFlight from "../components/EditFlight/EditFlight"
import DeleteFlight from "../components/DeleteFlight/DeleteFlight"



const AdminPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);

    const [editFormOpen, setEditFormOpen] = useState(false);
    const [addFormOpen, setAddFormOpen] = useState(false);
    const [removeFormOpen, setRemoveFormOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
      setButtonVisible(false);
    };
    const handleEditFlightClick = () => {
        setRemoveFormOpen(false);
        setAddFormOpen(false);
        setEditFormOpen(true);
    }
    const handleAddFlightClick = () => {
        setEditFormOpen(false);
        setRemoveFormOpen(false);
        setAddFormOpen(true);
    }
    const handleRemoveFlightClick = () => {
        setAddFormOpen(false);
        setEditFormOpen(false);
        setRemoveFormOpen(true)
    }
  
    return (
      <div className="center_div">
        <h1>Administrative Control Panel:</h1>
        <div className="button-container">
          {buttonVisible && (
            <button onClick={handleClick}>Flight Management</button>
          )}
          {isOpen && (
            <div className="wrapper">
                <div className='buttons_wrapper'>
          <button onClick={handleAddFlightClick} className='spacesButtons'>Add Flight</button>
          <button onClick={handleRemoveFlightClick} className='spacesButtons'>Remove Flight</button>
          <button onClick={handleEditFlightClick} className='spacesButtons'>Edit Existing Flight</button>

          {addFormOpen && (
           <div className="add-form-wrapper">
           <form className='add-textfield-form'>
             <div>
               <label>Carrier:</label>
               <input type="text" name="textbox22" />
             </div>
             <div>
               <label>Destination:</label>
               <input type="text" name="textbox32" />
             </div>
             <div>
               <label>Origin:</label>
               <input type="text" name="textbox42" />
             </div>
             <div>
               <label>Origin Country:</label>
               <input type="text" name="textbox52" />
             </div>
             <div>
               <label>Destination Country:</label>
               <input type="text" name="textbox62" />
             </div>
             <div>
               <label>Departure Time:</label>
               <input type="text" name="textbox72" />
             </div>
             <div>
               <label>Landing Time:</label>
               <input type="text" name="textbox82" />
             </div>
             <div>
               <label>Seats Quantity:</label>
               <input type="text" name="textbox92" />
             </div>
             <div>
               <label>Price:</label>
               <input type="text" name="textbox102" />
             </div>
             <div>
               <label>Date:</label>
               <input type="text" name="textbox112" />
             </div>
             <button className='CommitChangesBtn3'>Commit Changes</button>
           </form>
         </div>
               )}
          <DeleteFlight
              show={removeFormOpen}
          />
          <EditFlight
              show={editFormOpen}
          />                
              </div>
          </div>
          )}
        </div>
      </div>
    );
  };
  
  export default AdminPage;