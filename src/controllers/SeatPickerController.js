import {pickedSeats} from "../components/Deck/Deck"

export const pickSeat = (e,passengerNumber) => {
    if(e.target.getAttribute('class') == 'seat' && e.target.getAttribute('aria-disabled') != 'true' ){
        console.log(passengerNumber)
        if(passengerNumber.current > 0 && e.target.style.backgroundColor != 'red'){
            console.log('what')
            e.target.style.backgroundColor  = "red"
            pickedSeats[e.target.id] = {
                'seat':e.target.id.replace('seat-',''),
                'price':e.target.closest('.seats_row').getAttribute('data-price')
            }
            passengerNumber.current = passengerNumber.current - 1
            console.log("added Seat: ", pickedSeats, passengerNumber)
        } else if (e.target.style.backgroundColor == 'red'){
            e.target.style.backgroundColor  = "antiquewhite"
            delete pickedSeats[e.target.id];
            passengerNumber.current = passengerNumber.current + 1
            console.log("removed Seat: ", pickedSeats, passengerNumber)

        }
    }
}

export const consolee = () => {
    console.log("ya")
}

