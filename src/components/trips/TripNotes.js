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

    async function createNewNote () {

        const noteToPost = {
            trip_id: tripId,
            trip_note: newNote
        }

        setNewNote("")
        
        await createTripNote(noteToPost)

        await getTripNotesByTrip(tripId)
            .then( notesArray => {
                setNotes(notesArray)
            })

    }

    async function deleteCurrentNote(event) {
        await deleteTripNote(parseInt(event.target.id))

        await  getTripNotesByTrip(tripId)
            .then( notesArray => {
                setNotes(notesArray)
            })
    }

    return <>
    <div className='container tripDetails--item'>
        <div className='row'>
            <h5 style={{textAlign: 'center'}}>Trip Notes</h5>
        </div>
        <div className="row col-11 mx-auto my-2 form-group">
            <textarea className="form-control" rows="4" name="trip_note" value={newNote} onChange={(event) => setNewNote(event.target.value)}/>
        </div>
        <div className='row col-6 mx-auto my-2'>
            <button type="button" className="btn btn-primary my-2" onClick={createNewNote}
            >Add Note</button>
        </div>
            <div className="card my-5 mx-5">
                <ul className="list-group list-group-flush">
                    {
                        notes.map( note => (
                            <div className='row' key={`tripNote--${note.id}`}>
                                <li className="list-group-item">
                                    {note.trip_note}
                                <button type="button" style={{float: "right"}} id={note.id} className="btn btn-primary btn-sm" onClick={(event) => 
                                    {deleteCurrentNote(event)}}
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