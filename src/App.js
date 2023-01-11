import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import SeatsPicker from "./pages/SeatsPicker";
import PassengerDetails from "./pages/PassengerDetails";
import PaymentPage from "./pages/PaymentPage";
import { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import AdminPage from "./pages/AdminPage";

function App() {

    return (
            <div className="App">
                {/* <Navbar isConnected={isConnected} setIsConnected={setIsConnected} getCookieName={getCookieName}/> */}
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/flights" element={<Flights/>}></Route> 
                    <Route path="/PassengerDetails" element={<PassengerDetails/>}></Route> 
                    <Route path="/SeatsPicker" element={<SeatsPicker/>}></Route> 
                    <Route path="/PaymentPage" element={<PaymentPage/>}></Route> 
                    <Route path="/AdminPage" element={<AdminPage/>}></Route> 
                </Routes>
            </div>
    );
}

export default App;
