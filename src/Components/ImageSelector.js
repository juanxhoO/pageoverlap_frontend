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
    const { setSlotData } = useContext(DataContext);
    const [selectedTile, SetSelectedTile] = useState([]);

    const prevValue = useRef();


    useEffect(() => {
        //prevValue.current = selectedTile;


    }, [selectedTile]);

    const handleChange = (event, key) => {
        //setSlotData(props.data);
        prevValue.current = key;
        console.log(prevValue.current);

        SetSelectedTile(key);
        console.log(selectedTile);



        // document.querySelector('.tileSelector[value="'+ prevValue.current +'"]').style.backgroundColor = "#ffffff";
        //console.log(document.querySelector('.tileSelector[value="'+ prevValue.current +'"]'));
        event.target.style.backgroundColor = "red";
    };

    const confirmSlot = () => {

        console.log('clicked confirmed');
        //navigate("/");

    }

    return (
        <div>
            <ToggleButtonGroup style={{ display: "block" }} size='large'>
                <ToggleButton className="tileSelector" onClick={(event, key) => handleChange(event, key)} style={tileStyle} value="1">
                    <span>Slot 1 (Primary Image)</span>
                </ToggleButton>
                <ToggleButton className="tileSelector" onClick={handleChange} style={tileStyle} value="2">
                    <span>Slot 2</span>
                </ToggleButton>
                <ToggleButton className="tileSelector" onClick={handleChange} style={tileStyle} value="3" >
                    <span>Slot 3</span>
                </ToggleButton>
                <ToggleButton className="tileSelector" onClick={handleChange} style={tileStyle} value="4" >
                    <span>Slot 4</span>
                </ToggleButton>

            </ToggleButtonGroup>
            <Button style={{ display: "block", margin: "0 auto", marginTop: "30px" }} onClick={confirmSlot} variant="contained">Use Image</Button>
        </div>
    );
}

export default ImageSelector;