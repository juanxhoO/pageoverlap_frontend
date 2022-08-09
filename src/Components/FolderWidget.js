import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import Searchbar from './Searchbar';
import Subdirectory from './Subdirectory';
import { useEffect, useState } from 'react';

const FolderWidget = (props) => {

    const [apiResponse, setApiResponse] = useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [inputList, setInputList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3080/api/directory')
            .then(function (response) {
                setApiResponse(response.data);
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
        let url = 'http://localhost:3080/api/directory/' + key;

        axios.get(url)
            .then(function (response) {
                //                console.log(response.data);
                setInputList(<Subdirectory data={response.data} key={inputList.length} />);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };

    return (
        <div>
            <Searchbar></Searchbar>

            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main folders">
                    {apiResponse.map((data, index) => {
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
            <List>
                {inputList}
            </List>
        </div>
    );
}


export default FolderWidget;
