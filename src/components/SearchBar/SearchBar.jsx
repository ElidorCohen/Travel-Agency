import { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment/moment";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ButtonGroup from '@mui/material/ButtonGroup';
import PriceSlider from "../PriceSlider/PriceSlider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import * as controller from "../../controllers/homeController";
import * as states from "../../constants/countries"
import AutoCompElement from "../AutoCompElement/AutoCompElement";
import { act } from "react-dom/test-utils";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}


export default function SearchBar () {
    // parse to date only .format('DD-MM-YYYY');
    const [value, setValue] = useState(
        moment(new Date()),
    );
    const  [fieldValues, setFieldValues] = useState({
        "depart_date":moment(new Date()),
        "return_date":moment(new Date()),
        "pass_num":1
    })
    // const [priceValue, setPriceValue] = useState([0, 2200]);
    const [priceValue, setPriceValue] = useState([0, 2200]);

    const formRef = useRef({
        'flight_type':"",
        'from':"",
        'to':"",
        'depart_date':"",
        'landing_date':"",
        'direct':""
    })
    
    // useEffect(()=>{
    //     console.log(fieldValues)
    // },[fieldValues])

    const handlePriceChange = (event, newValue) => {
        setPriceValue(newValue);
    };
    const handleSendForm = () => {
        setFieldValues({
            'flight_type':"",
            'from':formRef.current.from,
            'to':formRef.current.to,
            'depart_date':formRef.current.depart_date.value,
            'return_date':formRef.current.landing_date.value,
        })

    }

    function handleChange(evt, name, value=null) {
        if(!value)
            value = evt.target.value;;
        setFieldValues(prev => ({
          ...prev,
          [name]: value,
        }));
      }

    // const handleDateChange = (newValue) => {
    //   setValue(newValue);
    // };
    


    return (
        <>
            <div className='search_bar_wrapper'>
                <div id="flight_type_radio">
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        // value={(ele) => {formRef.current.flight_type = ele}}
                        onChange={(e, value)=>{
                            controller.onChangeFlightType(e, formRef)
                            // handleChange(e, "flight_type")
                            controller.handleChange({e:e,name:"flight_type", value:value, setFieldValues: setFieldValues});
                        }}
                    >
                        <FormControlLabel value="Round" control={<Radio />} label="Round" />
                        <FormControlLabel value="One-Way" control={<Radio />} label="One-Way" />
                    </RadioGroup>
                </div>
                <div id="flight_details">
                    <Autocomplete
                        disablePortal
                        id="from"
                        options={states.states}
                        renderOption={(props, option)=>(
                            <Box {...props}>
                                <AutoCompElement
                                    name={option.label}
                                    code={option.code}
                                />
                            </Box>
                        )}
                        // onChange={(e, value)=>{formRef.current.from = value}} // get value
                        // onChange={(e, value)=>{handleChange(e, "from")}}
                        onChange={(e, value)=>{controller.handleChange({e:e,name:"from", value:value, setFieldValues: setFieldValues});}}
                        sx={{ width: 300 }}
                        ref={(ele) => {formRef.current.from = ele}}
                        renderInput={(params) => <TextField {...params} label="From" />}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={states.states}
                        renderOption={(props, option)=>(
                            <Box {...props}>
                                <AutoCompElement
                                    name={option.label}
                                    code={option.code}
                                />
                            </Box>
                        )}
                        sx={{ width: 300 }}
                        ref={(ele) => {formRef.current.to = ele}}
                        onChange={(e, value)=>{controller.handleChange({e:e,name:"to", value:value, setFieldValues: setFieldValues});}}
                        // onChange={(e, value)=>{formRef.current.to = value}}
                        renderInput={(params) => <TextField {...params} label="To" />}
                    />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <MobileDatePicker
                            label="Depart"
                            inputFormat="MM/DD/YYYY"
                            value={fieldValues.depart_date}
                            minDate={new Date(Date.now())}
                            // onChange={handleChange}
                            onChange={(value, e)=>{
                                // console.log(value)
                                controller.handleChange({e:e,name:"depart_date", value:value, setFieldValues});
                            }}
                            inputRef={(ele) => {formRef.current.depart_date = ele}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <MobileDatePicker
                            label="Return"
                            inputFormat="MM/DD/YYYY"
                            value={fieldValues.return_date}
                            minDate={new Date(Date.now())}
                            onChange={(value, e)=>{
                               controller.handleChange({e:e,name:"return_date", value:value, setFieldValues});
                            }}
                            inputRef={(ele) => {formRef.current.landing_date = ele}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Box sx={{ width: 200 }}>
                        <lable>Price</lable>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            max={2200}
                            value={priceValue}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <Button onClick={()=>{controller.handleCount("up", setFieldValues, fieldValues)}}>+</Button>
                        {<Button>{fieldValues.pass_num}</Button>}
                        <Button onClick={()=>{controller.handleCount("down", setFieldValues, fieldValues)}}>-</Button>
                    </ButtonGroup>
                </div>
                <div id="search_Filters">
                    <div>
                    </div>
                    <Link 
                        to={{
                            pathname: '/Flights',
                        }}
                        state={{
                            from:fieldValues.from,
                            to:fieldValues.to,
                            depart_date:fieldValues.depart_date.toDate(),
                            return_date:fieldValues.return_date.toDate(),
                            flight_type:fieldValues.flight_type,
                            pass_num:fieldValues.pass_num,
                            price:priceValue
                        }}
                        // onClick={controller.setOnCookie.bind(fieldValues)}
                        id="search_button"
                    >                    
                        <Button variant="contained">Search</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
