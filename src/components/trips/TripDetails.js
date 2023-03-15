//Each trip will have an individual trip page with more details about the trip

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getTrip } from "../managers/TripManager"

export const TripDetails = () => {
    const { tripId } = useParams()
    const [trip, setTrip] = useState({
        "name": "",
        "city": "",
        "state_or_country": "",
        "departure_date": "",
        "return_date": "",
        "reasons": []
    })

    useEffect(() => {
        const id = parseInt(tripId)
        getTrip(id).then(data => setTrip(data))
    }, [tripId])

    return <>
    <div className="row my-5 mx-5">
        <Link to={`/trips/edit/${tripId}`} className="btn btn-primary col-3">Edit Trip</Link>
    </div>
    
    </>
}