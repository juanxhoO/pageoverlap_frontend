import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const ScreenshotsPage = () => {
    const [apiResponse, setApiResponse] = useState([])
    
    
    const pathname = localStorage.getItem('pathname');
    const hostname = localStorage.getItem('hostname');

    useEffect(() => {
        
        axios.get("http://localhost:3080/api/thumbnails", {
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
    }, []);

    return (
        <div className="Maincontainer">
            {apiResponse.map((data) => {
                let image_src = "http://localhost:3080/images/" + hostname  + "/thumbnails/" + data.title + ".jpg" ;
                return (
                    <div>
                        <img src={image_src} />
                    </div>
                )
            })}

        </div>
    );
}

export default ScreenshotsPage;

