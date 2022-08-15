import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';



const ButtonStyles = {
    "margin": "20px 5px"
}

const Screenshot = (props) => {

    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;

    const navigate = useNavigate();
    const [apiResponse, setApiResponse] = useState([])
    let screenshotId = useParams();
    console.log(screenshotId)
    useEffect(() => {
        axios.get(api_url + "/api/screenshots/" + screenshotId.id).then(function (response) {
            console.log(response.data);
            setApiResponse(response.data);
        })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);


    const deleteScreenshot = () => {
        axios.delete(api_url + "/api/screenshots/" + screenshotId.id).then(function (response) {
            console.log(response.data);
            navigate('/');
        })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    const image_src = api_url + "/images/" + apiResponse.hostname + "/" + apiResponse.title + ".jpg"
    return (
        <div className="Maincontainer">


            <div className='ScreenshotContainer'>
                <img src={image_src} />

                <div className='ActionsContainer'>

                    <Button style={ButtonStyles} variant="contained">Use Image</Button>
                    <Button style={ButtonStyles} onClick={deleteScreenshot} variant="contained" color="error">Delete</Button>
                </div>

            </div>

        </div>
    );
}

export default Screenshot;

