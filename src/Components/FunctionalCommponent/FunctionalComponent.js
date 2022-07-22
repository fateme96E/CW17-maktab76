import React from "react";
import { useRef } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const FunctionalComponent = () => {
    const myVideo = useRef();

    const playVideo = () => {
        myVideo.current.play();
    }

    const pauseVideo = () => {
        myVideo.current.pause();
    } 
    console.log(myVideo)
    return (
       
        <>
            <div>
                <video width="320" height="176" ref={myVideo} controls>
                    <source src="https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/Screen_Recording_2019-11-06_at_4.14.52_pm.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div>
                <button className="btn btn-info px-4 text-white m-2" onClick={playVideo} >Play</button>
                <button className="btn btn-danger px-4 text-white m-2" onClick={pauseVideo} >Pause</button>
            </div>
        </>
    );
}

export default FunctionalComponent;