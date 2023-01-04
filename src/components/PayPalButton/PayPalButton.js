import { useEffect, useState } from "react";
import { loadScript } from "@paypal/paypal-js";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import "./PayPalButton.css";


export default function PayPalButton (props) {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);

    // const onCurrencyChange = ({ target: { value } }) => {
    //     setCurrency(value);
    //     dispatch({
    //         type: "resetOptions",
    //         value: {
    //             ...options,
    //             currency: value,
    //         },
    //     });
    // }
    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: props.amount, // change to Total price.
                    },
                },
            ],
        });
    }
    const onApproveOrder = (data,actions) => {
      return actions.order.capture().then((details) => {
        const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    {/* <select value={currency} onChange={onCurrencyChange}>
                            <option value="USD">💵 USD</option>
                            <option value="EUR">💶 Euro</option>
                    </select> */}
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}

