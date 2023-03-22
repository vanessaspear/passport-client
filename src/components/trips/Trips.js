//Primary trip page that shows all of a user's trips
//Trip cards are hyperlinked to trip's details page

import { useEffect, useState } from "react"
import { getTripsByUser, getUpcomingTripCount } from "../managers/TripManager"
import { Link } from "react-router-dom"
import { Trip } from "./Trip"

export const Trips = () => {

const [trips, setTrips] = useState([])
const [upcomingTripCount, setUpcomingTripCount] = useState([])

useEffect(
    () => {
        getTripsByUser()
        .then( userTripsArray => {
            setTrips(userTripsArray)
        })

        getUpcomingTripCount()
        .then( data => {
            setUpcomingTripCount(data)
        })
    },
    []
) 

return <>
    <div className="row my-5 mx-5" style={{textAlign: 'center'}}>
        <h1>You have {upcomingTripCount} upcoming trips!</h1>
    </div>
    <div className="row my-4 mx-5">
        <Link to={`/trips/new`} className="btn btn-primary col-3">Add Trip</Link>
    </div>
    <div className="row">
        {
            trips.map( trip => <Trip key={`trip--${trip.id}`} trip={trip}/>)
        }
    </div>
</>

}