// Generate a list of trip notes added by the user

import { useState, useEffect } from "react"
import { getTripNotesByTrip, createTripNote, deleteTripNote } from "../managers/TripNotesManager"

export const TripNotes = ({ tripId }) => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")

    useEffect(
        () => {
            getTripNotesByTrip(tripId)
            .then( notesArray => {
                setNotes(notesArray)
            })
        },
        []
    ) 
    
    useEffect(
        () => {
            getTripNotesByTrip(tripId)
            .then( notesArray => {
                setNotes(notesArray)
            })
        },
        [notes]
    ) 

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const noteToPost = {
            trip_id: tripId,
            trip_note: newNote
        }

        setNewNote("")
        
        createTripNote(noteToPost)

    }

    return <>
    <div className='container'>
        <div className='row'>
            <h5 style={{textAlign: 'center'}}>Trip Notes</h5>
        </div>
        <div className="row col-11 mx-auto my-2 form-group">
            <textarea className="form-control" rows="4" name="trip_note" value={newNote} onChange={ (event) => setNewNote(event.target.value)}/>
        </div>
        <div className='row col-6 mx-auto my-2'>
            <button type="button" className="btn btn-primary my-2" onClick={(evt) => {handleSubmit(evt)}}
            >Add Note</button>
        </div>
            <div className="card my-5 mx-5">
                <ul className="list-group list-group-flush">
                    {
                        notes.map( note => (
                            <div className='row' key={`tripNote--${note.id}`}>
                                <li className="list-group-item">
                                    {note.trip_note}
                                <button type="button" style={{float: "right"}} className="btn btn-primary btn-sm" onClick={() => 
                                    {deleteTripNote(note.id)}}
                                >Delete</button>
                                </li>
                            </div>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    </>
}