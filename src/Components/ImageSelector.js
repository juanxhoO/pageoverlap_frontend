import React, { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { useState, useContext, useRef } from 'react'
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
    const tileElement = useRef(null);
    const { setSlotData } = useContext(DataContext);
    const [selectedTile, SetSelectedTile] = useState([]);

    useEffect(() => {
        console.log("changed");
        console.log(selectedTile);
    }, [selectedTile]);

    const handleChange = (event, key) => {
        //setSlotData(props.data);
        SetSelectedTile(key);
        console.log(tileElement.current);
        tileElement.current.backgroundColor = "#ffffff";
        event.target.style.backgroundColor = "red";
    };

    const confirmSlot = () => {
        navigate("/");
    }

    return (
        <div>
            <ToggleButtonGroup style={{ display: "block" }} size='large'>
                <ToggleButton ref={tileElement} onClick={(event, key) => handleChange(event, key)} style={tileStyle} value="1">
                    <span>Slot 1 (Primary Image)</span>
                </ToggleButton>
                <ToggleButton ref={tileElement} onClick={handleChange} style={tileStyle} value="2">
                    <span>Slot 2</span>
                </ToggleButton>
                <ToggleButton ref={tileElement} onClick={handleChange} style={tileStyle} value="3" >
                    <span>Slot 3</span>
                </ToggleButton>
                <ToggleButton ref={tileElement} onClick={handleChange} style={tileStyle} value="4" >
                    <span>Slot 4</span>
                </ToggleButton>

            </ToggleButtonGroup>
            <Button style={{ display: "block", margin: "0 auto", marginTop: "30px" }} onClick={confirmSlot} variant="contained">Use Image</Button>
        </div>
    );
}

export default ImageSelector;