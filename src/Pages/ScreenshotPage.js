import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import React from 'react';

const ScreenshotPage = () => {

    useEffect(()=> {
        console.log('dssd');
    });

    return (
        <div className="Maincontainer">
            <p></p>
            <div className='Imagecontainer'>
            </div>
            <Button>
                Use Screenshot
            </Button>
        </div>
    );
}

export default ScreenshotPage;

