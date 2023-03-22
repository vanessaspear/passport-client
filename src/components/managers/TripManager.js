import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getAllTrips = () => {
    return fetchIt(`${API}/trips`)
}

export const getTrip = (trip_id) => {
    return fetchIt(`${API}/trips/${trip_id}`)
}

export const getTripsByUser = () => {
    return fetchIt(`${API}/trips?filter_by=user`)
}

export const createTrip = (trip) => {
    return fetchIt(`${API}/trips`, {
        method: 'POST',
        body: JSON.stringify(trip)
    })
}

export const updateTrip = (tripId, trip) => {
    return fetchIt(`${API}/trips/${tripId}`, {
        method: 'PUT',
        body: JSON.stringify(trip)
    })
}

export const deleteTrip = (trip_id) => {
    return fetchIt(`${API}/trips/${trip_id}`, {
        method: 'DELETE'
    })
}

export const getReasons = () => {
    return fetchIt(`${API}/trips/reasons`)
}

export const getUpcomingTripCount = () => {
    return fetchIt(`${API}/trips/upcoming`)
}

export const getPastTrips = () => {
    return fetchIt(`${API}/trips/past`)
}