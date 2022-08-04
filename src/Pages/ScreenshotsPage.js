import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const ScreenshotsPage = () => {
    const [apiResponse,setApiResponse] = useState([])
    useEffect(() => {
        const pathname = localStorage.getItem('pathname');
        axios.get("http://localhost:3080/api/directory/thumbnails")
            .then(function (response) {
                
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    });

    return (
        <div className="Maincontainer">
            {apiResponse.map((data) => {
                        return (
                             <div>
                                <img src="" />
                             </div>
                        )
                    })}

        </div>
    );
}

export default ScreenshotsPage;

