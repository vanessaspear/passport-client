// Displays the details of the itinerary

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { deleteItinerary, getItinerary } from "../managers/ItineraryManager"

export const ItineraryDetails = () => {
    const { itineraryId } = useParams()
    const navigate = useNavigate()
    const [itinerary, setItinerary] = useState({
        name: "",
        itinerary_description: "",
        date: "",
        start_time: "",
        end_time: "",
        city: "",
        state_or_country: "",
        trip: {},
        categories: []
    })

    useEffect(() => {
        const id = parseInt(itineraryId)
        getItinerary(id).then(data => setItinerary(data))
    }, [itineraryId])

    return <>
        <div className="container">
            <div className="row mx-5 my-5">
                <div className="col">
                    <Link to={`/trips/${itinerary.trip.id}`} className="btn btn-primary mx-2">Back</Link>
                    <Link to={`/itineraries/edit/${itineraryId}`} className="btn btn-primary">Edit Itinerary</Link>
                    <button className="btn btn-primary mx-2" onClick={() => {
                        if (
                            window.confirm(
                            `Are you sure you want to delete this itinerary?`
                            )
                        )
                        deleteItinerary(itinerary.id)
                            .then(() => navigate(`/trips/${itinerary?.trip?.id}`))
                    }
                    }>Delete Itinerary</button>
                </div>
            </div>
            <div className="row mx-5 my-5">
                <h5 className="my-3" style={{textDecoration: "underline"}}>{itinerary.name}</h5>
                <p>Date: {itinerary.date}</p>
                <p>From {itinerary.start_time} to {itinerary.end_time}</p>
                <p>{itinerary.itinerary_description}</p>
                <p>Location: {itinerary.city}, {itinerary.state_or_country}</p> 
                {
                    itinerary.categories.map(category => <p># {category.category}</p>)
                }    
            </div>
        </div>
    </>
}