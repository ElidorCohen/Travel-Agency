import { Link } from "react-router-dom";

export const onChangeFlightType = (returnFieldRef)=>{
    console.log(returnFieldRef)
    if(returnFieldRef.flight_type.value === '' || returnFieldRef.flight_type.value === 'One-Way' ){
        returnFieldRef.to.style.display = 'none';
        returnFieldRef.landing_date.style.display = 'none';
    }
    else{
        returnFieldRef.to.style.display = 'inline-flex';
        returnFieldRef.landing_date.style.display = 'inline-flex';
    }
        
}   

export const search_flight = () => {
    window.location.pathname = '/Flights'
}