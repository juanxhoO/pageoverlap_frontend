import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const ImageSelector = (props) => {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const navigate = useNavigate();

    return (
        <div>
            <ToggleButtonGroup size='large'>
                <ToggleButton value="left" key="left">
                </ToggleButton>
                <ToggleButton value="left" key="left">
                </ToggleButton>
                <ToggleButton value="left" key="left">
                </ToggleButton>
                <ToggleButton value="left" key="left">
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default ImageSelector;

