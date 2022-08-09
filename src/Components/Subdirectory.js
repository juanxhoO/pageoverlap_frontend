import { List, Box } from '@mui/material';
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";

const Subdirectory = (props) => {
    let navigate = useNavigate();

    const handleClickDirectory = (event) => {
        let pathname = event.currentTarget.getAttribute('pathname');
        let hostname = event.currentTarget.getAttribute('hostname');
        localStorage.setItem("pathname", pathname);
        localStorage.setItem("hostname", hostname);
        navigate("/directory/screenshots");

    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                {props.data.map((data) => {
                    return (
                        <ListItemButton
                            onClick={handleClickDirectory}
                            pathname={data.pathname}
                            hostname={data.hostname}
                            key={data._id}
                        >
                            <ListItemText primary={data.pathname} />
                        </ListItemButton>
                    )
                })}
            </List>

        </Box>


    );
}

export default Subdirectory;

