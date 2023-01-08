import React, {useState, useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment/moment";
const axios = require('axios');

function createData(id, carrier, destination, origin, origin_country, destination_country, deprature_time, landing_time, seats_left, price, date) {
  return {id, carrier, destination, origin, origin_country, destination_country, deprature_time, landing_time, seats_left, price, date:moment(date).format("DD/MM/YYYY")};
}
const rowsTemp = [];
export default function DenseTable(props) {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const initTable = async () => {
            try{  
                const res  = await axios.get('http://localhost:3001/getFlights');
                // console.log(res);
                res.data.map(element => {
                    rowsTemp.push(createData(element.id, element.carrier, element.destination, element.origin, element.origin_country, element.destination_country, element.departure_time, element.landing_time, element.seats_left, element.price, element.date));
                })
                console.log(res.data, rowsTemp);
                setRows(rowsTemp);
            }
            catch(e){
                console.log("error While fetching data for admin Table: ", e);
            }
        }
        initTable();
    },[])
    const [selectedRow, setSelectedRow] = useState({});
    console.log({ selectedRow });
    
    return (
      <TableContainer component={Paper} sx={{ height:'200px'  }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Carrier</TableCell>
              <TableCell align="right">Destination</TableCell>
              <TableCell align="right">Origin</TableCell>
              <TableCell align="right">Origin Country</TableCell>
              <TableCell align="right">Destination Country</TableCell>
              <TableCell align="right">Departure Time</TableCell>
              <TableCell align="right">Landing Time</TableCell>
              <TableCell align="right">Available Seats</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                console.log('sdfsdf ', row),
              <TableRow
                onClick={() => props.setRowsData(row)}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.carrier}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.origin}</TableCell>
                <TableCell align="right">{row.origin_country}</TableCell>
                <TableCell align="right">{row.destination_country}</TableCell>
                <TableCell align="right">{row.deprature_time}</TableCell>
                <TableCell align="right">{row.landing_time}</TableCell>
                <TableCell align="right">{row.seats_left}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

