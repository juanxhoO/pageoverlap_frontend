import React from 'react';
import { useNavigate } from 'react-router-dom';

const Results = () => {
    
    const results = JSON.parse(localStorage.getItem("results"));
    const navigate = useNavigate();
    const api_url = process.env.REACT_APP_AXIOS_BASE_URL;

    const handleThumbnail = (event) => {
        console.log(event.currentTarget.id);
        let screenshot_id = event.currentTarget.id;
        localStorage.setItem("screenshot_id", screenshot_id);
        navigate("/directory/screenshots/" + screenshot_id);
    }

    return (
        <div className="Maincontainer">
            <div className='ThumbnailContainer' >
                {results.map((data) => {
                    let image_src = api_url + "/images/" + data.hostname + "/thumbnails/" + data.title + ".jpg";
                    return (
                        <div key={data._id} id={data._id} onClick={handleThumbnail} className='ThumbContainer'>
                            <img src={image_src} />

                            <div className='thumbDetails'>

                                <span className='labelThumb'>
                                    Screentype:
                                </span>
                                <span>
                                    {data.Screentype}
                                </span>
                            </div>

                            <div className='thumbDetails'>

                                <span className='labelThumb'>
                                    Date:
                                </span>
                                <span>
                                    {data.date}
                                </span>
                            </div>
                            <div className='thumbDetails'>

                                <span className='labelThumb'>
                                    Dimensions:
                                </span>
                                <span>
                                    {data.dimensions[0]}x
                                    {data.dimensions[1]}
                                </span>
                            </div>

                        </div>



                    )
                })}
            </div>
        </div>
    );
}

export default Results;

