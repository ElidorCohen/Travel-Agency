import "./SearchMenu.css";
import { useEffect,useState  } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function SearchMenu  ({ logoa, logob, teamB, date, info, setModalContent, setModalOpen, setReFetch, bets, realGames, status }){
    const [value, setValue] = useState(30);

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
        </div>
        </>
    )
}
