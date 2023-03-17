// Landing page for when users first access website

import takeoffVideo from "./assets/airplane_takeoff.mp4"
import "./Landing.css";

export const Landing = () => {

    return <>
        <video autoPlay loop muted className="myVideo">
            <source src={takeoffVideo} type="video/mp4" />
        </video>

    <div className="myVideoContainer">
        <video autoPlay loop muted className="myVideo">
            <source src={takeoffVideo} type="video/mp4" />
        </video>
        <div className="myText">
            <h1>Passport</h1>
            <p>Let Your Life Liftoff</p>
        </div>
    </div>
        
    </>
}

