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
export const saveCreditCardOrUseCreditCard = async (props, fields, handleChange)=>{
    const flight_info = props.flight_info.flight_info.flight
    if (fields[2].value.length < 6) {alert('Please fill your id and before asking for credit card info'); return};
    const data = {
        'id':fields[2],
        'credit_card':fields[4],
        'password':fields.password,
    }
    const res  = await axios
    .post("http://localhost:3001/getCreditCard", data)
    console.log(res)
    if(parseInt(res.data)){
        const element = document.getElementById("field-5");
        handleChange(null,4,true, parseInt(res.data))
        console.log("what")
    } else{
        alert(res.data);
    }
    
}  
