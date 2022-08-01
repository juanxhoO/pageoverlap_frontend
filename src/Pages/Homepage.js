import ImageComponent from '../Components/imageComponent';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
function Homepage() {

    useEffect(() => {

    });
    const overlayImages = (e) => {
        document.querySelector('.App').classList.add("overlay")
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
                <Link to="directory">
                    Search by Directory
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
