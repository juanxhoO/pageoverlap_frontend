import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';


const Screenshot = (props) => {


    const navigate = useNavigate();
    const [apiResponse, setApiResponse] = useState([])
    let screenshotId = useParams();
    useEffect(() => {
        axios.get("http://localhost:3080/api/screenshots/" + screenshotId.id).then(function (response) {
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
        axios.delete("http://localhost:3080/api/screenshots/" + screenshotId.id).then(function (response) {
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

    const image_src = "http://localhost:3080/images/" + apiResponse.hostname + "/" + apiResponse.title + ".jpg"
    return (
        <div className="Maincontainer">


            <div className='ScreenshotContainer'>
                <img src={image_src} />

                <div className='ActionsCOntainer'>

                </div>

                <Button variant="contained">Use Image</Button>
                <Button onClick={deleteScreenshot} variant="contained" color="error">Delete</Button>
            </div>

        </div>
    );
}

export default Screenshot;

