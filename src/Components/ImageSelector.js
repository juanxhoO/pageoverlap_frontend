import React, { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { useState, useContext } from 'react'
import { Button } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataProvider.js';

const tileStyle = {
    width: "50%",
    display: "inline-block",
    height: "150px"
}

const ImageSelector = (props) => {
    const navigate = useNavigate();
    const { slotData, setSlotData } = useContext(DataContext);
    const [selectedTile, SetSelectedTile] = useState(null);

    const confirmSlot = () => {
        let data = props.data;
        data.position = selectedTile
        

        if (slotData.length <= 0) {
            console.log("empty array adding eement");
            setSlotData(slotData => [...slotData, data]);
        }
        //updating array with the new element in same position as the previous one
        else {
            //Checking if Element Exists
            if (slotData.some(e => e.position === selectedTile)) {
                let filteredArray = slotData.filter(item => item.position !== selectedTile);
                console.log(filteredArray);
                filteredArray.push(data);
                setSlotData(filteredArray);
            }
            //Adding if not Exists
            else {
                if (slotData.length < 4) {
                    console.log("not match but added");
                    setSlotData(slotData => [...slotData, data]);
                }
            }
        }


        navigate("/");


    }

    return (
        <div>
            <ToggleButtonGroup style={{ display: "block" }} size='large'>
                <ToggleButton className="tileSelector" onClick={(event,key) => SetSelectedTile(key)} style={tileStyle} value={1}>
                    <span>Slot 1 (Primary Image)</span>
                </ToggleButton>
                <ToggleButton className="tileSelector" onClick={(event,key) => SetSelectedTile(key)} style={tileStyle} value={2}>
                    <span>Slot 2</span>
                </ToggleButton>
                <ToggleButton className="tileSelector" onClick={(event,key) => SetSelectedTile(key)} style={tileStyle} value={3} >
                    <span>Slot 3</span>
                </ToggleButton>
                <ToggleButton className="tileSelector" onClick={(event,key) => SetSelectedTile(key)} style={tileStyle} value={4} >
                    <span>Slot 4</span>
                </ToggleButton>

            </ToggleButtonGroup>
            <Button style={{ display: "block", margin: "0 auto", marginTop: "30px" }} onClick={confirmSlot} variant="contained">Use Image</Button>
        </div>
    );
}

export default ImageSelector;