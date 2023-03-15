//Each trip will have an individual trip page with more details about the trip

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getTrip } from "../managers/TripManager"
import { Itineraries } from "../itineraries/Itineraries"
import { ItineraryForm } from "../itineraries/ItineraryForm"

export const TripDetails = () => {
    const { tripId } = useParams()
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

    const handleClick = () => {
        
        return <ItineraryForm tripId={tripId}/>
    }

    return <>
    <div className="row my-5 mx-5">
        <Link to={`/trips/edit/${tripId}`} className="btn btn-primary col-3">Edit Trip</Link>
    </div>
    <h5 style={{textAlign: 'center'}}>Trip Itineraries</h5>
    <div className="row my-1 mx-5">
        <button className="btn btn-primary col-3" onClick={handleClick}>Add Itinerary</button>
    </div>
    <Itineraries tripId={tripId}/>
    </>
}