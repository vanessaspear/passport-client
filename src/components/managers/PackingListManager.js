import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getPackingListByTrip = (tripId) => {
    return fetchIt(`${API}/packinglist?trip_id=${tripId}`)
}

export const packItem = (item) => {
    return fetchIt(`${API}/packinglist`, {
        method: 'POST',
        body: JSON.stringify(item)
    })
}

export const unpackItem = (itemId) => {
    return fetchIt(`${API}/packinglist/${itemId}`, {
        method: 'DELETE'
    })
}