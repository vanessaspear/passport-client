// Generates the itineraries list

import { useEffect, useState } from "react"
import { getItinerariesByTrip } from "../managers/ItineraryManager"
import { Link } from "react-router-dom"
import { Itinerary } from "./Itinerary"

export const Itineraries = ({ tripId }) => {

const [itineraries, setItineraries] = useState([])

useEffect(
    () => {
        getItinerariesByTrip(tripId)
        .then( itinerariesArray => {
            setItineraries(itinerariesArray)
        })
    },
    []
) 

return <>
        <div className="row">
            {
                itineraries.map( itinerary => <Itinerary key={`itinerary--${itinerary.id}`} itinerary={itinerary}/>)
            }
        </div>
    </>

}