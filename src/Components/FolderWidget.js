import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import Searchbar from './Searchbar';

import { useEffect, useState } from 'react';

const FolderWidget = () => {

    const [apiResponse, setApiResponse] = useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    useEffect(() => {

        axios.get('http://localhost:3080/api/directory')
            .then(function (response) {
                console.log(response.data);
                setApiResponse(response.data);
                console.log(apiResponse)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);


    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

        let key = event.currentTarget.id


        const url = 'http://localhost:3080/api/directory/' + key;

        axios.get(url)
            .then(function (response) {
                console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    };

    return (
        <div className="Maincontainer">
            <Searchbar></Searchbar>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                <List component="nav" aria-label="main folders">

                    {apiResponse.map((data, index) => {
                        let hostname = data;
                        return (
                            <ListItemButton
                                id={data.hostname}
                                key={data._id}
                                selected={selectedIndex === index}
                                onClick={(event) => handleListItemClick(event, index)}
                            >
                                <ListItemText primary={data.hostname} />
                            </ListItemButton>

                        )
                    })}
                </List>
            </Box>

        </div>
    );
}


export default FolderWidget;
