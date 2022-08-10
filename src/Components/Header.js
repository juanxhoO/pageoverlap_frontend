import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <header>
            <Button onClick={() => navigate('/')}>Homepage</Button>
        </header>
    );
}

export default Header;

