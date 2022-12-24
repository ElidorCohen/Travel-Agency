import {pickedSeats} from "../components/Deck/Deck"

export const pickSeat = (e,passengerNumber, setPassengerNumber) => {
    if(e.target.getAttribute('class') == 'seat' && e.target.getAttribute('aria-disabled') != 'true' ){
        console.log(e.target.style.backgroundColor);
        if(passengerNumber > 0 && e.target.style.backgroundColor != 'rgb(255, 191, 0)'){
            e.target.style.backgroundColor  = "#FFBF00" 
            pickedSeats[e.target.id] = {
                'seat':e.target.id.replace('seat-',''),
                'price':e.target.closest('.seats_row').getAttribute('data-price')
            }
            // passengerNumber.current = passengerNumber.current - 1
          setPassengerNumber(prev => prev - 1)
        } else if (e.target.style.backgroundColor == 'rgb(255, 191, 0)'){
            e.target.style.backgroundColor  = "antiquewhite"
            delete pickedSeats[e.target.id];
            // passengerNumber.current = passengerNumber.current + 1
            setPassengerNumber(prev => prev + 1)
        }

    }
}

export const consolee = () => {
    console.log("ya")
}

