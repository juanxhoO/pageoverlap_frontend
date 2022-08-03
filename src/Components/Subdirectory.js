import { useState, useEffect } from 'react';
import { Button, List, Box } from '@mui/material';
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Subdirectory = (props) => {
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        console.log(props.data)
        setData(props.data);
    }, [data])

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                {data.map((data) => {
                    return (
                        <ListItemButton
                            id={data.hostname}
                            key={data._id}
                        >
                            <ListItemText primary={data.url} />
                        </ListItemButton>
                    )
                })}
            </List>

        </Box>


    );
}

export default Subdirectory;

