// Landing page for when users first access website

import takeoffVideo from "./assets/airplane_takeoff.mp4"
import "./Landing.css";

export const Landing = () => {

    return <>
        <div className="landing-container">
            <div className="myVideoContainer">
                <video autoPlay loop muted className="myVideo">
                    <source src={takeoffVideo} type="video/mp4" />
                </video>
                <div className="myText">
                    <img src="/landing_logo.png" className="landing_logo" alt="logo" />   
                </div>
            </div>
        </div>
        
    </>
}

