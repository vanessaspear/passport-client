// Handles fetch requests for all Stamp interactions

import { fetchIt } from "../utilities/fetchIt.js"

const API = "http://localhost:8000"

export const getTypes = () => {
    return fetchIt(`${API}/stamps/types`)
}

export const getStampPhotos = () => {
    return fetchIt(`${API}/stamps/photos`)
}

export const getStampPhotosByUser = () => {
    return fetchIt(`${API}/stamps/photos?filter_by=user`)
}

export const getStampJournals = () => {
    return fetchIt(`${API}/stamps/journals`)
}

export const getStampJournalsByUser = () => {
    return fetchIt(`${API}/stamps/journals?filter_by=user`)
}

export const getStampProducts = () => {
    return fetchIt(`${API}/stamps/products`)
}

export const getStampProductsByUser = () => {
    return fetchIt(`${API}/stamps/products?filter_by=user`)
}

export const createStampPhoto = (stamp) => {
    return fetchIt(`${API}/stamps/photos`, {
        method: 'POST',
        body: JSON.stringify(stamp)
    })
}

export const createStampJournal = (stamp) => {
    return fetchIt(`${API}/stamps/journals`, {
        method: 'POST',
        body: JSON.stringify(stamp)
    })
}

export const createStampProduct = (stamp) => {
    return fetchIt(`${API}/stamps/products`, {
        method: 'POST',
        body: JSON.stringify(stamp)
    })
}