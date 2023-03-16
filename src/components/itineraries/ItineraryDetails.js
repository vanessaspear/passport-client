// Displays the details of the itinerary

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getItinerary } from "../managers/ItineraryManager"

export const ItineraryDetails = () => {
    const { itineraryId } = useParams()
    const [itinerary, setItinerary] = useState({
        name: "",
        itinerary_description: "",
        date: "",
        start_time: "",
        end_time: "",
        city: "",
        state_or_country: "",
        trip_id: 0,
        categories: []
    })

    useEffect(() => {
        const id = parseInt(itineraryId)
        getItinerary(id).then(data => setItinerary(data))
    }, [itineraryId])

    return <>
        <div className="row my-5 mx-5">
            <Link to={`/itineraries/edit/${itineraryId}`} className="btn btn-primary col-3">Edit Itinerary</Link>
        </div>
        <h5>{itinerary.name}</h5>
        <p>{itinerary.itinerary_description}</p>
    </>
}