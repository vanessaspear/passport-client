// Generates a stamp card based on the stamp type

import { ImLocation, ImAirplane } from "react-icons/im";

export const Stamp = ({ stamp }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const formattedDate = date.toLocaleDateString('en-US', options)
        return formattedDate
    }

    const formatTime = (dateString) => {
        const date = new Date(dateString)
        const options = { hour: 'numeric', minute: 'numeric', hour12: true }
        const formattedTime = date.toLocaleTimeString('en-US', options)
        return formattedTime
    }

    if (stamp?.type?.id == 1) {
        return <>
            <div className="card" style={{width: 450}} key={`photo--${stamp.id}`}>
                <img src={`http://localhost:8000/${stamp.image}`} className="card-img-top" alt="Photo from trip"></img>
                <div className="card-body" style={{height: "auto"}}>
                    <h5 className="card-title">{formatDate(stamp.date_created)} @ {formatTime(stamp.date_created)}</h5>
                    <p className="card-text">{stamp.description}</p>
                </div>
                <footer className="mb-3">
                    <div className="row">
                        <div className="col-1">
                            <ImLocation />
                        </div>
                        <div className="col">
                            {stamp?.trip?.city}, {stamp?.trip?.state_or_country}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <ImAirplane />
                        </div>
                        <div className="col">
                            {stamp?.trip?.name}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    }
    else if (stamp?.type?.id == 2){
        return <>
            <div className="card" style={{width: 450}} key={`photo--${stamp.id}`}>
                <div className="card-body" style={{height: "auto"}}>
                    <h5 className="card-title">{formatDate(stamp.date_created)} @ {formatTime(stamp.date_created)}</h5>
                    <h6 className="card-subtitle my-2 text-muted">{stamp.name}</h6>
                    <p className="card-text">{stamp.entry}</p>
                </div>
                <footer className="mb-3">
                    <div className="row">
                        <div className="col-1">
                            <ImLocation />
                        </div>
                        <div className="col">
                            {stamp?.trip?.city}, {stamp?.trip?.state_or_country}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <ImAirplane />
                        </div>
                        <div className="col">
                            {stamp?.trip?.name}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    }
    else if (stamp?.type?.id == 3) {
        return <>
            <div className="card" style={{width: 450}} key={`photo--${stamp.id}`}>
                <div className="card-body" style={{height: "auto"}}>
                    <h5 className="card-title">{formatDate(stamp.date_created)} @ {formatTime(stamp.date_created)}</h5>
                    <h6 className="card-subtitle my-2 text-muted">{stamp.name}</h6>
                    <p className="card-text">{stamp.description}</p>
                    <a href={stamp.link} className="card-link" target="_blank">Product link</a>
                </div>
                <footer className="mb-3">
                    <div className="row">
                        <div className="col-1">
                            <ImLocation />
                        </div>
                        <div className="col">
                            {stamp?.trip?.city}, {stamp?.trip?.state_or_country}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <ImAirplane />
                        </div>
                        <div className="col">
                            {stamp?.trip?.name}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    }
    
}