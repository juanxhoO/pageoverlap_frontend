import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import React from 'react';

const ImageComponent = () => {

    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;

    const [url, setUrl] = useState('');
    const [apiresponse, setApiResponse] = useState('');
    const [validUrl, setValidUrl] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [screenType, setScreenType] = useState('abovefold');
    const styledButn = {
        "margin": "0 5px"
    }

    useEffect(() => {
        setValidUrl(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/i.test(url));
        console.log(validUrl);
    }, [url])

    function handleUrl(url) {
        var result
        var match

        if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/i)) {
            result = match[0]

            if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
                result = match
                console.log(result);
                return true
            }
        }
        else {
            return false;
        }

    }
    const getScreenshot = (event) => {
        event.preventDefault();
        if (handleUrl(url)) {
            if (!loading) {
                setLoading(true);
            }

            axios.post(api_url + '/api/pageshot', {
                url: url,
                type: screenType
            })
                .then(function (response) {
                    setApiResponse(response.data);
                    localStorage.setItem("imagehandle", response.data)
                    setShowImg(true);
                    setLoading(false);

                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            alert("url is wrong formatted");
        }

    }
    const handleImageHeight = (type) => {
        setScreenType(type)
    }
    const handleChange = (event) => {
        setUrl(event.target.value);
    }
    const removeImg = () => {
        setShowImg(false);
    }
    return (
        <div className="ImageContainer">
            <span onClick={removeImg} className={showImg ? "showimg cancelimg" : "offscreen"} >X</span>
            <img className={showImg ? "showimg" : "offscreen"} src={api_url + apiresponse}>
            </img>
            <form className={!showImg ? "showimg" : "offscreen"} onSubmit={getScreenshot}>
                <TextField type="text" onChange={handleChange} placeholder='place url:' />
                <TextField value="Submit URL" type="submit" />
                <span className='url_error'>Error in the url</span>
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}

                <div className='buttonsContainer'>
                    <Button style={styledButn} color={screenType == "belowfold" ? "success" : "primary"} variant="contained" onClick={() => handleImageHeight('belowfold')}>BelowFold</Button>
                    <Button style={styledButn} color={screenType == "abovefold" ? "success" : "primary"} variant="contained" onClick={() => handleImageHeight('abovefold')}>Abovefold</Button>
                    <Button style={styledButn} color={screenType == "fullscreen" ? "success" : "primary"} variant="contained" onClick={() => handleImageHeight('fullscreen')}>Fullscreen</Button>

                </div>



            </form>
        </div>
    );
}

export default ImageComponent;

