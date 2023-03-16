//Each trip will have an individual trip page with more details about the trip

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { getTrip, deleteTrip } from "../managers/TripManager"
import { Itineraries } from "../itineraries/Itineraries"
import { TripNotes } from "./TripNotes"

export const TripDetails = () => {
    const { tripId } = useParams()
    const navigate = useNavigate()
    const [trip, setTrip] = useState({
        name: "",
        city: "",
        state_or_country: "",
        departure_date: "",
        return_date: "",
        reasons: []
    })

    useEffect(() => {
        const id = parseInt(tripId)
        getTrip(id).then(data => setTrip(data))
    }, [tripId])


    return <>
    <div className="row my-5 mx-5">
        <Link to={`/trips/edit/${tripId}`} className="btn btn-primary col-3">Edit Trip</Link>
        <button className="btn btn-primary col-3" onClick={() => {
                if (
                    window.confirm(
                      `Are you sure you want to delete this trip?`
                    )
                )
                deleteTrip(tripId)
                    .then(() => navigate(`/trips`))
            }
            }>Delete</button>
    </div>
    <h5 style={{textAlign: 'center'}}>Trip Itineraries</h5>
    <div className="row my-1 mx-5">
        <Link className="btn btn-primary col-3" to={`/itineraries/${tripId}/new`}>Add Itinerary</Link>
    </div>
    <Itineraries tripId={tripId}/>
    <TripNotes tripId={tripId}/>
    </>
}