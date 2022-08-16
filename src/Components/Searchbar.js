import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Searchbar = () => {

    const navigate = useNavigate();
    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;

    const [urlSearch, setUrlSearch] = useState('');

    const handleChange = (event) => {
        setUrlSearch(event.target.value);
    }

    const handleSearchInput = (event) => {
        event.preventDefault();
        axios.get(api_url + '/api/thumbnails', {
            params: {
                url: urlSearch,
            }
        })
            .then(function (response) {
                
                localStorage.setItem("results", JSON.stringify(response.data))
                navigate("/results")

            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <form onSubmit={handleSearchInput}>
            <Stack spacing={2} sx={{ width: 300 }}>
                <TextField onChange={handleChange} type="text" placeholder="Search..." />
                <Button type="submit" variant="contained" >Search</Button>
            </Stack>

        </form>
    );
}

export default Searchbar;

