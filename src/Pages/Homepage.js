import ImageComponent from '../Components/imageComponent';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import DataContext from '../context/DataProvider.js';
import { useContext } from 'react'


function Homepage() {
    const slotData = useContext(DataContext);
    const overlayImages = (e) => {
        document.querySelector('.App').classList.add("overlay")
    }

    const restoreImages = (e) => {
        //e.target.className 
        //this.classList.add("sdssdsd");
        console.log('click');
        document.querySelector('.App').classList.remove("overlay")
    }


    useEffect(() => {
        console.log(slotData);
    }, []);


    return (


        <div>
            <div className='actionButtonsContainer'>
                <Button className="overlayBtn" onClick={overlayImages} variant="contained">Overlap Images</Button>
                <Button className="unoverlayBtn" onClick={restoreImages} variant="contained">Restore</Button>
            </div>

            <div className="Maincontainer">

                <div className="ImgComponentContainer">
                    <ImageComponent onClick={overlayImages}></ImageComponent>
                    <ImageComponent onClick={overlayImages}></ImageComponent>
                    <ImageComponent onClick={overlayImages}></ImageComponent>
                    <ImageComponent onClick={overlayImages}></ImageComponent>
                </div>

            </div>
        </div>


    );
}

export default Homepage;
