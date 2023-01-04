import { useState } from "react";
import "./AutoCompElement.css";
import { Divider } from '@mui/material';

import ReactCountryFlag from "react-country-flag"
import { BiBarChart } from "react-icons/bi";
import { useEffect } from "react";


export default function AutoCompElement (props) {
    return (
        <>
            <div className="option_wrapper">
                <div className='country'>
                <h4> {props.name} </h4>
                </div>
                <div className='airport'>
                <p> {props.code} </p>
                </div>
                <Divider/>
            </div>
        </>
    )
}
