//Primary trip page that shows all of a user's trips
//Trip cards are hyperlinked to trip's details page

import { useEffect, useState } from "react"
import { getTripsByUser } from "../managers/TripManager"
import { Link } from "react-router-dom"
import { Trip } from "./Trip"

export const Trips = () => {

const localUser = localStorage.getItem("passport_token")
const userObject = JSON.parse(localUser)
const [trips, setTrips] = useState([])

useEffect(
    () => {
        getTripsByUser(userObject.id)
        .then( userTripsArray => {
            setTrips(userTripsArray)
        })
    },
    []
) 

return <>
    <div className="row my-5 mx-5">
        <Link to={`/trips/new`} className="btn btn-primary col-3">Add Trip</Link>
    </div>
    <div className="row">
        {
            trips.map( trip => <Trip key={`trip--${trip.id}`} trip={trip}/>)
        }
    </div>
</>

}