import React, { useEffect, useState } from 'react';
import "./AdminPage.css";
import Header from "../components/Header/Header";
import EditFlight from "../components/EditFlight/EditFlight"
import DeleteFlight from "../components/DeleteFlight/DeleteFlight"
import AddFlight from "../components/AddFlight/AddFlight"



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
          <AddFlight
            show={addFormOpen }
          />
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