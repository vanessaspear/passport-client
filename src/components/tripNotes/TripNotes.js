// Generate a list of trip notes added by the user

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { getTripNotesByTrip, createTripNote, updateTripNote, deleteTripNote } from "../managers/TripNotesManager"

export const TripNotes = ({ tripId }) => {

    const navigate = useNavigate()
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

    const changeNewNoteState = (event) => {
        const copy = { ...newNote }
        copy[event.target.name] = event.target.value
        setNewNote(copy)
    }

    return <>
    <div className='container'>
        <div className='row'>
            <h5 style={{textAlign: 'center'}}>Trip Notes</h5>
        </div>
        <div className="row col-6 mx-auto my-2">
            <textarea name="trip_note" value={newNote.trip_note} onChange={changeNewNoteState}/>
            <button type="button" className="btn btn-primary btn-sm my-2" onClick={() => {
                
                const noteToPost = {
                    trip_id: tripId,
                    trip_note: newNote.trip_note
                }

                createTripNote(noteToPost).then(() => window.location.reload())

            }}>Add Note</button>
        </div>
        <div className="row">
            <div className='col'>
                <div className="card my-5 mx-5">
                    <ul className="list-group list-group-flush">
                        {
                            notes.map( note => <li className="list-group-item" key={`tripNote--${note.id}`}>
                            <div className="col-12">
                                {note.trip_note}
                            </div>
                            <div className="col-3 mt-3">
                                <button type="button" className="btn btn-primary btn-sm" onClick={() => 
                                {deleteTripNote(note.id).then(() => window.location.reload())
                                }}>Delete</button>
                            </div>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
}