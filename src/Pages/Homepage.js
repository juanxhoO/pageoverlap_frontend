import ImageComponent from '../Components/imageComponent';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';




function Homepage() {

    const usenavigate = useNavigate();
    const overlayImages = (e) => {
        document.querySelector('.App').classList.add("overlay")
    }
    
    const handleDirectory = () => {
        usenavigate('/directory')
    }
    const restoreImages = (e) => {
        //e.target.className 
        //this.classList.add("sdssdsd");
        console.log('click');
        document.querySelector('.App').classList.remove("overlay")
    }
    return (
        <div className="Maincontainer">

            <div className='mainContainer'>
                <ImageComponent onClick={overlayImages}></ImageComponent>
                <ImageComponent onClick={overlayImages}></ImageComponent>
                <ImageComponent onClick={overlayImages}></ImageComponent>
                <ImageComponent onClick={overlayImages}></ImageComponent>
            </div>
            <div className='actionButtonsContainer'>
                <Button className="overlayBtn" onClick={overlayImages} variant="contained">Overlap Images</Button>
                <Button className="unoverlayBtn" onClick={restoreImages} variant="contained">Restore</Button>
                <Button onClick={() => handleDirectory()}  variant="contained">
                    Search by Directory
                </Button>
            </div>
        </div>
    );
}

export default Homepage;
