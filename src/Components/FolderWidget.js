import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import Searchbar from './Searchbar';
import Subdirectory from './Subdirectory';
import { useEffect, useState, useContext } from 'react';
import DataContext from '../context/DataProvider.js';


const FolderWidget = () => {


    const {slotData} = useContext(DataContext);

    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;
    const [apiResponse, setApiResponse] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [inputList, setInputList] = useState([]);

    useEffect(() => {
        axios.get(api_url + '/api/directory')
            .then(function (response) {
                setApiResponse(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [slotData]);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        localStorage.setItem("hostname", event.currentTarget.getAttribute('id'));
        let key = event.currentTarget.id
        let url = api_url + '/api/directory/' + key;
        axios.get(url)
            .then(function (response) {
                //console.log(response.data);
                setInputList(<Subdirectory data={response.data} key={inputList.length} />);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <div>
            <Searchbar />

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
                                <ListItemText key={index} primary={data.hostname} />
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
