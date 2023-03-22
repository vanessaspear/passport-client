//Generates the list of all user stamps (product, journal, and photos)

import { useState, useEffect } from "react"
import { getStampPhotosByUser } from "../managers/StampManager"

export const StampsList = () => {

    const [photos, setPhotos] = useState([])

    useEffect(
        () => {
            getStampPhotosByUser()
            .then( userPhotosArray => {
                setPhotos(userPhotosArray)
            })
        },
        []
    ) 

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const formattedDate = date.toLocaleDateString('en-US', options)
        return formattedDate
    }

    const formatTime = (dateString) => {
        const date = new Date(dateString)
        const options = { hour: 'numeric', minute: 'numeric', hour12: true }
        const formattedTime = date.toLocaleTimeString('en-US', options)
        return formattedTime
    }

    return <>
        <div className="row justify-content-center">
        {
            photos.map( photo => <>
            <div className="card" style={{width: 450}} key={photo.id}>
                <img src={`http://localhost:8000/${photo.image}`} className="card-img-top" alt="Photo from trip"></img>
                <div className="card-body" style={{height: "auto"}}>
                    <h5 className="card-title">{formatDate(photo.date_created)} @ {formatTime(photo.date_created)}</h5>
                    <p className="card-text">{photo.description}</p>
                </div>
            </div>
            </>
        )}
        </div>
    </>
}