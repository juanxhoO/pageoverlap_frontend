import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ImageSelector from '../Components/ImageSelector';


const ButtonStyles = {
    "margin": "20px 5px"
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const Screenshot = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;

    const navigate = useNavigate();
    const [apiResponse, setApiResponse] = useState([])
    let screenshotId = useParams();
    //console.log(screenshotId)
    useEffect(() => {
        axios.get(api_url + "/api/screenshots/" + screenshotId.id).then(function (response) {
            //console.log(response.data);
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

        let result = window.confirm("Are you sure to delete the Screenshot?");
        if (result) {
            axios.delete(api_url + "/api/screenshots/" + screenshotId.id).then(function (response) {
                console.log(response.data);

                navigate('/');
            })
                .catch(function (error) {
                    console.log(error);
                })
        }

        else {
            console.log('alert screentho not deleted');
        }
    }

    const image_src = api_url + "/images/" + apiResponse.hostname + "/" + apiResponse.title + ".jpg"
    return (
        <div className="Maincontainer">
            <div className='ScreenshotContainer'>
                <img src={image_src} />
                <div className='ActionsContainer'>
                    <Button onClick={handleOpen} style={ButtonStyles} variant="contained">Use Image</Button>
                    <Button style={ButtonStyles} onClick={deleteScreenshot} variant="contained" color="error">Delete</Button>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ImageSelector data={apiResponse}></ImageSelector>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default Screenshot;

