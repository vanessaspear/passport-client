//Displays a map of all of the locations that the user has visited during their trips

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { getPastTrips } from '../managers/TripManager'
import { Link } from 'react-router-dom'

export const TripsMap = () => {
    const [trips, setTrips] = useState([])

    useEffect(
        () => {
            getPastTrips()
            .then( (tripsArray) => {
                setTrips(tripsArray)
            }) 
        },
        []
    )

    return <>
        <MapContainer center={[15, 8]} zoom={1.5} scrollWheelZoom={false} style={{ height: "500px" }}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                trips.map( trip => {
                    return <Marker position={[trip.latitude, trip.longitude]} key={trip.id}>
                        <Popup>
                            <div style={{textAlign: 'center'}}>
                                <div>
                                    <h5>{trip.city}, {trip.state_or_country}</h5>
                                </div>
                            </div>
                        </Popup>
                    </Marker>       
                })
            }
        </MapContainer>
    </>
}