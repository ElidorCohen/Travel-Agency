import { Link } from "react-router-dom";

export const onChangeFlightType = (event, returnFieldRef)=>{
    console.log(returnFieldRef)
    if(event.target.value === '' || event.target.value === 'One-Way' ){
        returnFieldRef.current.to.style.display = 'none';
        returnFieldRef.current.landing_date.style.display = 'none';
    }
    else{
        returnFieldRef.current.to.style.display = 'inline-flex';
        returnFieldRef.current.landing_date.style.display = 'inline-flex';
    }
        
}   
export const handleCount = (action, setFieldValues, fieldValues)=> {
    console.log(action)
    if(action === "up"){
        setFieldValues(prev => ({
                ...prev,
                pass_num:prev.pass_num + 1
            }));
    }else if (fieldValues.pass_num > 0) {
        setFieldValues(prev => ({
            ...prev,
            pass_num:prev.pass_num - 1
        }));
    }
}

export const handleChange = ({evt, name, value=null, setFieldValues}) => {
    if(!value)
        value = evt.target.value;;
    setFieldValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }
// export const search_flight = (values) => {
//     console.log(values)

//     // window.location.pathname = '/Flights'
// } 