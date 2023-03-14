import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getPhotosByTrip = (trip_id) => {
    return fetchIt(`${API}/tripphotos?trip_id=${trip_id}`)
}

