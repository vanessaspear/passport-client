//Primary trip page that shows all of a user's trips
//Trip cards are hyperlinked to trip's details page

import { useEffect, useState } from "react"
import { getTripsByUser } from "../managers/TripManager"
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
    <div className="row">
        {
            trips.map( trip => <Trip key={`trip--${trip.id}`} trip={trip}/>)
        }
    </div>
</>

}