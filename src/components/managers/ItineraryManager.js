import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getItineraries = () => {
    return fetchIt(`${API}/itineraries`)
}

export const getItinerary = (itinerary_id) => {
    return fetchIt(`${API}/itineraries/${itinerary_id}`)
}

export const getItinerariesByTrip = (trip_id) => {
    return fetchIt(`${API}/itineraries?trip_id=${trip_id}`)
}

export const createItinerary = (itinerary) => {
    return fetchIt(`${API}/itineraries`, {
        method: 'POST',
        body: JSON.stringify(itinerary)
    })
}

export const updateItinerary = (itineraryId, itinerary) => {
    return fetchIt(`${API}/itineraries/${itineraryId}`, {
        method: 'PUT',
        body: JSON.stringify(itinerary)
    })
}

export const deleteItinerary = (itinerary_id) => {
    return fetchIt(`${API}/itineraries/${itinerary_id}`, {
        method: 'DELETE'
    })
}

export const getReasons = () => {
    return fetchIt(`${API}/itineraries/reasons`)
}