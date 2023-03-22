// Handles fetch requests for all Stamp interactions

import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getTypes = () => {
    return fetchIt(`${API}/stamps/types`)
}

export const createStampPhoto = (stamp) => {
    return fetchIt(`${API}/stamps/photos`, {
        method: 'POST',
        body: JSON.stringify(stamp)
    })
}