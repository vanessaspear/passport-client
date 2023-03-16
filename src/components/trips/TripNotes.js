// Generate a list of trip notes added by the user

import { useState, useEffect } from "react"
import { getTripNotesByTrip } from "../managers/TripNotesManager"

export const TripNotes = ({ tripId }) => {

    const [notes, setNotes] = useState([])

    useEffect(
        () => {
            getTripNotesByTrip(tripId)
            .then( notesArray => {
                setNotes(notesArray)
            })
        },
        []
    ) 

    return <>
        <div className="row">
        <h5 style={{textAlign: 'center'}}>Trip Notes</h5>
            <div className="card my-5 mx-5" style={{width: '25rem'}}>
                <ul className="list-group list-group-flush">
                    {
                        notes.map( note => <li className="list-group-item">{note.trip_note}</li>)
                    }
                </ul>
            </div>
        </div>
    </>
}