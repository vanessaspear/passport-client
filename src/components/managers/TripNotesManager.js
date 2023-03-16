import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getTripNotes = () => {
    return fetchIt(`${API}/tripnotes`)
}

export const getTripNote = (trip_note_id) => {
    return fetchIt(`${API}/tripnotes/${trip_note_id}`)
}

export const getTripNotesByTrip = (trip_id) => {
    return fetchIt(`${API}/tripnotes?trip_id=${trip_id}`)
}

export const createTripNote = (trip_note) => {
    return fetchIt(`${API}/tripnotes`, {
        method: 'POST',
        body: JSON.stringify(trip_note)
    })
}

export const updateTripNote = (trip_note_Id, trip_note) => {
    return fetchIt(`${API}/tripnotes/${trip_note_Id}`, {
        method: 'PUT',
        body: JSON.stringify(trip_note)
    })
}

export const deleteTripNote = (trip_note_id) => {
    return fetchIt(`${API}/tripnotes/${trip_note_id}`, {
        method: 'DELETE'
    })
}