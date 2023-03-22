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

    return <>
        <div className="row">
        {
            photos.map( photo => <img src={`http://localhost:8000/${photo.image}`} alt="Photo from trip" key={photo.id}></img>)
        }
        </div>
    </>
}