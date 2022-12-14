import React, { useEffect, useState } from 'react';
import "../App.css";
import RepeatableFieldForm from "../components/RepeatableFieldForm/RepeatableFieldForm";
import Header from "../components/Header/Header";

function PassangerDetails() {

  useEffect(() => {
    
  }, []);


  return (
    <>
      <div className='passanger_page_container' style={{'height':'100%'}}>
          <div style={{'height':'100px'}}>
            <Header/>
          </div>
          <div id="passanger_form">
              <RepeatableFieldForm/>
          </div>
          <div id="searchBar_container">
          </div>
      </div>
     
    </>
  )
}

export default PassangerDetails;