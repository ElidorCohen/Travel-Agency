import "./SearchMenu.css";
import { useEffect,useState  } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import * as controller from "../../controllers/homeController";
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link, useParams, useLocation} from 'react-router-dom';




export default function SearchMenu  ({ fieldValues, setFieldValues }){
    const [value, setValue] = useState(30);
    const location = useLocation();
    console.log("REALYY", location);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
        <>
        <div id="search_menu_container" style={{marginBottom: "30px"}}>       
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Price Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={2} direction="column" sx={{ mb: 1 }} alignItems="center">
                        <Typography>
                            Price Range
                            {value}
                        </Typography>
                        <Slider aria-label="Volume" value={value} onChange={handleChange} style={{'width':'90%'}} />
                    </Stack>
                    <Typography>
                        Decrese Price
                    </Typography>
                    <Typography>
                        Increase Price
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Flight Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Departure options</Typography>
                </AccordionSummary>
            </Accordion>
            {/* <Button>+</Button> */}
            <div id="passanger_number">
                <p>
                    Passanger Numbers
                </p>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button onClick={()=>{controller.handleCount("up", setFieldValues, fieldValues)}}>+</Button>
                    {/* {<Button>{fieldValues.pass_num}</Button>} */}
                    {<Button>{fieldValues.pass_num}</Button>}
                    <Button onClick={()=>{controller.handleCount("down", setFieldValues, fieldValues)}}>-</Button>
                </ButtonGroup>
            </div>
            {/* <Button>-</Button> */}
        </div>
        </>
    )
}
