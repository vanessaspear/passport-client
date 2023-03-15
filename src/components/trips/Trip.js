//Generates the trip card to be displayed in the trip list

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getPhotosByTrip } from "../managers/TripPhotoManager"

export const Trip = ({ trip }) => {

    const [photo, setPhoto] = useState([])

    // useEffect(
    //     () => {
    //         getPhotosByTrip(trip.id)
    //         .then(photosArray => {
    //             let tripPhoto = ""
    //             if (photosArray) {
    //                 tripPhoto = photosArray[0]?.trip?.image
    //             } 
    //             setPhoto(tripPhoto)
    //         })
    //     }
    // )

    return <>
        <div className="col-sm-6">
            <div className="card my-5 mx-5">
                {/* {
                    photo ? <img src={`http://localhost:8000/media/photos/${photo}`} className="card-img-top" alt="The trip's location"/>
                        : ""
                } */}
                <div className="card-body">
                    <h5 className="card-title mb-3">{trip.name}</h5>
                    <p className="card-text">
                        {trip.departure_date} through {trip.return_date}
                    </p>
                    <p className="card-text">
                        {trip.city}, {trip.state_or_country}
                    </p>
                    <p className="card-text">
                        Travel Reason: {
                            trip?.reasons?.map(reason => reason?.reason).join(", ")
                        }
                    </p>  
                    <Link to={`/trips/${trip.id}`} className="btn btn-outline-primary">View Trip Details</Link>
                </div>
            </div>
        </div>
    </>
}