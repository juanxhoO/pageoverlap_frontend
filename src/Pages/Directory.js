import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import React from 'react';
import FolderWidget from '../Components/FolderWidget';

const Directory = () => {

    return (
        <div className="Maincontainer">
        <FolderWidget></FolderWidget>
        </div>
    );
}

export default Directory;

