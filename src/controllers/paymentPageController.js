const axios = require('axios');


export const submitPayment = async (props, fields)=>{
    const flight_info = props.flight_info.flight_info.flight
    const seat_list =[]
    Object.keys( props.flight_info.pickedSeats).map(element => {
        seat_list.push(props.flight_info.pickedSeats[element]);
    })
    const data = {
        'flightId':flight_info.flight_id.id1,
        'seats_list':seat_list,
        'id':fields[2],
        'phone_number':fields[3],
        'credit_card':fields[4],
        'CVV':fields[5],
    }
    const res  = await axios
    .post("http://localhost:3001/bookFlight", data).then(()=>{
        alert('Booking has recived successfully!');
        window.location.href = '/'
    });
}  
