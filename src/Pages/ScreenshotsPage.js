import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScreenshotsPage = () => {
    const [apiResponse, setApiResponse] = useState([])
    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;

    const navigate = useNavigate();
    const pathname = localStorage.getItem('pathname');
    const hostname = localStorage.getItem('hostname');

    useEffect(() => {
        axios.get(api_url + "/api/thumbnails", {
            params: {
                hostname: hostname,
                pathname: pathname
            }
        }).then(function (response) {
            console.log(response.data);
            setApiResponse(response.data);
        })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [localStorage.getItem('pathname')]);


    const handleThumbnail = (event) => {
        console.log(event.currentTarget.id);

        let screenshot_id = event.currentTarget.id;
        localStorage.setItem("screenshot_id", screenshot_id);
        navigate("/directory/screenshots/" + screenshot_id);
    }

    return (
        <div className="Maincontainer">
            {apiResponse.map((data) => {
                let image_src = api_url + "/images/" + hostname + "/thumbnails/" + data.title + ".jpg";
                return (
                    <div key={data._id} id={data._id} onClick={handleThumbnail} className='ThumbContainer'>

                        <img src={image_src} />

                        <span>

                            <span>
                                {data.Screentype}
                            </span>

                            <span>
                                {data.dimensions[0]}x
                                {data.dimensions[1]}
                            </span>

                        </span>

                    </div>
                )
            })}

        </div>
    );
}

export default ScreenshotsPage;

