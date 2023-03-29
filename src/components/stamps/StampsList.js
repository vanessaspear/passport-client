//Generates the list of all user stamps (product, journal, and photos)

import { useState, useEffect } from "react"
import { getStampPhotosByUser, getStampJournalsByUser } from "../managers/StampManager"
import { Stamp } from "./Stamp"

export const StampsList = () => {

    const [photos, setPhotos] = useState([])
    const [journals, setJournals] = useState([])
    const [stamps, setStamps] = useState([])

    useEffect(
        () => {
            getStampPhotosByUser()
            .then( userPhotosArray => {
                setPhotos(userPhotosArray)
            })

            getStampJournalsByUser()
            .then( userJournalsArray => {
                setJournals(userJournalsArray)
            })

        },
        []
    ) 

    useEffect(
        () => {
            Stamps()
        },
        [photos, journals]
    )
    
    //Creates a single list of combined stamps
    const Stamps = () => {
        let combinedStampsList = [...photos, ...journals]
        combinedStampsList.sort((a,b) => (new Date(b.date_created) - new Date(a.date_created)))
        return setStamps(combinedStampsList)
    }

    return <>
        <div className="row justify-content-center">
            {
                stamps.map(stamp => {return <Stamp key={`${stamp?.type?.type}--${stamp.id}`} stamp={stamp}/>})
            }
        </div>
    </>
}