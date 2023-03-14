//Form to create a new trip and to update trip details

import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getTrip, createTrip, updateTrip, getReasons } from "../managers/TripManager"

export const TripForm = () => {
    const navigate = useNavigate()
    const [reasons, setReasons] = useState([])
    const [tripReasons, setTripReasons] = useState(new Set())
    const [currentTrip, setCurrentTrip] = useState({
        name: "",
        city: "",
        state_or_country: "",
        departure_date: "",
        return_date: "",
        reasons: []
    })
    const { tripId } = useParams()

    const reasonArr = (reasonId) => {
        let copy = new Set(tripReasons)
        copy.has(reasonId) ? copy.delete(reasonId) : copy.add(reasonId)
        setTripReasons(copy)
    }

    useEffect(() => {
        if (tripId) {
            getTrip(tripId)
                .then((trip) => {
                    setCurrentTrip(trip)
                    const reasonSet = new Set()
                    for (const reason of trip.reasons) {
                        reasonSet.add(reason.id)
                    }
                    setTripReasons(reasonSet)
            })
        }
    }, [tripId])

    useEffect(() => {
        getReasons().then(data => setReasons(data))
    }, [])

    const changeTripState = (event) => {
        const copy = { ...currentTrip }
        copy[event.target.name] = event.target.value
        setCurrentTrip(copy)
    }


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Add Trip Information</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentTrip.name}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" required autoFocus className="form-control"
                        value={currentTrip.city}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state_or_country">State / Country </label>
                    <input type="text" name="state_or_country" required autoFocus className="form-control"
                        value={currentTrip.state_or_country}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="departure_date">Departure Date:</label>
                    <input type="date" name="departure_date" required autoFocus className="form-control"
                        value={currentTrip.departure_date}
                        onChange={changeTripState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="return_date">Return Date:</label>
                    <input type="date" name="return_date" required autoFocus className="form-control"
                        value={currentTrip.return_date}
                        onChange={changeTripState}
                    />
                </div>
                <div className="field">
                    <label htmlFor="content" className="label">Reasons: </label>
                    {
                        reasons.map(reason => {
                            // Compare current `id` and see if on object exists with that id in currentTrip.reasons
                            const foundReason = currentTrip.reasons.find(tripReason => reason.id === tripReason.reason)

                            return <div key={`reason--${reason.id}`}>
                                <input type="checkbox" name={reason.reason}
                                    defaultChecked={foundReason}
                                    onClick={() => reasonArr(reason.id) } />
                                <label htmlFor={reason.reason}>{reason?.reason}</label><br/>
                            </div>
                        })

                    }</div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const trip = {
                        id: currentTrip.id,
                        name: currentTrip.name,
                        city: currentTrip.city,
                        state_or_country: currentTrip.state_or_country,
                        departure_date: currentTrip.departure_date,
                        return_date: currentTrip.return_date,
                        reasons: Array.from(tripReasons)
                    }

                    // If there is a tripId route parameter, invoke updateTrip, otherwise createTrip
                    if (tripId) {
                        updateTrip(trip.id, trip).then(() => navigate("/trips"))
                    }
                    else {
                        createTrip(trip).then(() => navigate("/trips"))
                    }
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}
