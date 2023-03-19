import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getPackingListByTrip = (tripId) => {
    return fetchIt(`${API}/packinglist?trip_id=${tripId}`)
}

export const addItem = (item) => {
    return fetchIt(`${API}/packinglist`, {
        method: 'POST',
        body: JSON.stringify(item)
    })
}

export const deleteItem = (itemId) => {
    return fetchIt(`${API}/packinglist/${itemId}`, {
        method: 'DELETE'
    })
}

export const getItem = (itemId) => {
    return fetchIt(`${API}/packinglist/${itemId}`)
}

export const updateItem = (itemId, item) => {
    return fetchIt(`${API}/packlinglist/${itemId}`, {
        method: 'PUT',
        body: JSON.stringify(item)
    })
}