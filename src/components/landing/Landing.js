// Landing page for when users first access website

import takeoffVideo from "./assets/airplane_takeoff.mp4"

export const Landing = () => {

    return <>
        <video autoPlay loop muted className="myVideo" style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
            <source src={takeoffVideo} type="video/mp4" />
        </video>
    </>
}

