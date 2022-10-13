import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import React from 'react';
import DataContext from '../context/DataProvider.js';

const styledButn = {
    "margin": "0 5px"
}

const regex_url = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/i;
const ImageComponent = (props) => {
    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;
    const [url, setUrl] = useState('');
    const [apiresponse, setApiResponse] = useState('');
    const [validUrl, setValidUrl] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const { slotData, setSlotData } = useContext(DataContext);
    const [screenType, setScreenType] = useState('abovefold');

    useEffect(() => {
        setValidUrl(regex_url.test(url));
    }, [url])

    useEffect(() => {

        //updating array with the new element in same position as the previous one

        //Checking if Element Exists
        if (slotData.some(e => e.position === props.dataSlot)) {
            
            
            slotData.map(function(element){
                if(element.position === props.dataSlot){
                    console.log(element)
                    setApiResponse(element);
                    setShowImg(true);
                }
            });
            //setSlotData(filteredArray);
        }
    
        console.log("dsdsd");
    },[]);

    function handleUrl(url) {
        var result
        var match

        if (match = url.match(regex_url)) {
            result = match[0]

            if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
                result = match
                //console.log(result);
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
                    //add Element if empty slotData 
                    let data = response.data
                    data.position = props.dataSlot

                    if (slotData.length <= 0) {
                        console.log("empty array adding eement");
                        setSlotData(slotData => [...slotData, data]);
                    }
                    //updating array with the new element in same position as the previous one
                    else {
                        //Checking if Element Exists
                        if (slotData.some(e => e.position === props.dataSlot)) {
                            let filteredArray = slotData.filter(item => item.position !== props.dataSlot);
                            console.log(filteredArray);
                            filteredArray.push(data);
                            setSlotData(filteredArray);

                        }
                        //Adding if not Exists
                        else {
                            if (slotData.length < 4) {
                                console.log("not match but added");
                                setSlotData(slotData => [...slotData, data]);
                            }
                        }
                    }

                    setApiResponse(response.data);
                    localStorage.setItem("imagehandle", response.data);
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

        //Checking if Element Exists
        if (slotData.some(e => e.position === props.dataSlot)) {        
                        
                    setSlotData((slotData) => slotData.filter((element, index) => element.position !== props.dataSlot));                
            //setSlotData(filteredArray);
        }
    }
    return (
        <div className="ImageContainer">
            <span onClick={removeImg} className={showImg ? "showimg cancelimg" : "offscreen"} >X</span>
            <img className={showImg ? "showimg" : "offscreen"} src={api_url + apiresponse.directory + "/" + apiresponse.title + ".jpg"}>
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

