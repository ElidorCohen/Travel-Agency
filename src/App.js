import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import SeatsPicker from "./pages/SeatsPicker";
import PassengerDetails from "./pages/PassengerDetails";
import PaymentPage from "./pages/PaymentPage";
import Rank from "./pages/Rank";
import SideBets from "./pages/SideBets";
import { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import AdminPage from "./pages/AdminPage";

function App() {
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState(false);
    const [modalTitle, setModalTitle] = useState(false);
    const setModalContent = (modalText, modalTitle) => {
        setModalText(modalText);
        setModalTitle(modalTitle);
    }
    const onCloseModal = () => {
      setOpen(false);
    }

    // const getCookieName = () => {
    //     if(document.cookie) return JSON.parse(document.cookie?.substring(5));
    // }

    // const [isConnected, setIsConnected] = useState();

    // useEffect(() => {
    //     const cookie_value = getCookieName();
    //     if(cookie_value) {
    //         setIsConnected(true);
    //         window.USER_ID = cookie_value["user_id"];
    //     } 
    // }, []);
    
    return (
            <div className="App">
                <Modal open={open} onClose={onCloseModal} modalTitle={modalTitle} modalText={modalText} />
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
