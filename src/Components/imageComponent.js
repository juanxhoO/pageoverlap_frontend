import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';


const ImageComponent = () => {

    const [url, setUrl] = useState('');
    const [apiresponse, setApiResponse] = useState('');
    const [validUrl, setValidUrl] = useState(false);
    const [showImg, setShowImg] = useState(false);

    const cLoseStyleButton = {
        position: 'absolute',
        top: 0,
        right: 0,
        marginRight: 0
      };
      
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

            axios.post('http://localhost:3080/api/abovefold', {
                url: url
            })
                .then(function (response) {
                    console.log(response.data);
                    setApiResponse(response.data);
                    setShowImg(true);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        } else {
            alert(url);
        }

    }

    const handleChange = (event) => {
        setUrl(event.target.value);
    }

    return (
        <div className="ImageContainer">
            <img className={showImg ? "showimg" : "offscreen"} src={"http://localhost:3080" + apiresponse}>
            </img>
            <form onSubmit={getScreenshot}>
                <TextField type="text" onChange={handleChange} placeholder='place url:'/>
                <TextField type="submit" />
                <span className='url_error'>Error in the url</span>
            </form>
        </div>
    );
}

export default ImageComponent;

