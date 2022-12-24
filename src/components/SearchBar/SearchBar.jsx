import { useState, useRef } from "react";
import "./SearchBar.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment/moment";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ReactCountryFlag from "react-country-flag"
import { BiBarChart } from "react-icons/bi";
import { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import * as controller from "../../controllers/homeController";


export default function SearchBar ({ id, teamA, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }) {
    const [value, setValue] = useState(
        moment('2014-08-18T21:11:54'),
    );
    const formRef = useRef({
        'flight_type':"",
        'from':"",
        'to':"",
        'depart_date':"",
        'landing_date':"",
        'direct':""
    })
    
    const handleChange = (newValue) => {
      setValue(newValue);
    };
    
    

    return (
        <>
            <div className='search_bar_wrapper'>
                <div id="flight_type_radio">
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        inputRef={(ele) => {formRef.current.flight_type = ele}}
                        onChange={()=>{controller.onChangeFlightType(formRef)}}
                    >
                        <FormControlLabel value="Round" control={<Radio />} label="Round" />
                        <FormControlLabel value="One-Way" control={<Radio />} label="One-Way" />
                    </RadioGroup>
                </div>
                <div id="flight_details">
                    <Autocomplete
                        disablePortal
                        id="from"
                        // options={top100Films}
                        onChange={(e, value)=>{console.log(value)}} // get value
                        sx={{ width: 300 }}
                        ref={(ele) => {formRef.current.from = ele}}
                        renderInput={(params) => <TextField {...params} label="From" />}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={['top100Films','yes','no']}
                        sx={{ width: 300 }}
                        inputRef={(ele) => {formRef.current.to = ele}}
                        onChange={(e, value)=>{console.log(value)}}
                        renderInput={(params) => <TextField {...params} label="To" />}
                    />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <MobileDatePicker
                            label="Depart"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChange}
                            inputRef={(ele) => {formRef.current.depart_date = ele}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <MobileDatePicker
                            label="Return"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChange}
                            inputRef={(ele) => {formRef.current.landing_date = ele}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div id="search_Filters">
                    <div>
                      <FormControlLabel  onChange={()=>{console.log(formRef.current.direct)}} ref={(ele) => {formRef.current.direct = ele}} control={<Checkbox />} label="Direct Flights Only" />
                    </div>
                    <Button variant="contained" onClick={controller.search_flight}>Search</Button>
                </div>
            </div>
        </>
    )
}
