//Presents the form for adding a new stamp

import { useState, useEffect } from "react"
import { getPastTrips } from "../managers/TripManager"
import { getItinerariesByTrip } from "../managers/ItineraryManager"
import { getTypes } from "../managers/StampManager"
import { StampPhoto } from "./StampPhoto"
import { StampJournal } from "./StampJournal"
import { StampProduct } from "./StampProduct"

export const StampForm = () => {

    const [trips, setTrips] = useState([])
    const [itineraries, setItineraries] = useState([])
    const [selectedTrip, setSelectedTrip] = useState(0)
    const [selectedItinerary, setSelectedItinerary] = useState(null)
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState({})

    useEffect(
        () => {
            getPastTrips()
            .then( tripsArray => {
                setTrips(tripsArray)
            })

            getTypes()
            .then( typesArray => {
                setTypes(typesArray)
            })
        },
        []
    )
    
    const handleTripChange = (event) => {
        
        const tripId = parseInt(event.target.value)
        setSelectedTrip(tripId)

        //Get all itineraries associated with the trip
        getItinerariesByTrip(tripId)
        .then( itinerariesArray => {
            setItineraries(itinerariesArray)
        })
    }

    useEffect(
        () => {
            console.log(`You're creating a new stamp`)
        },
        [selectedType]
    )    

    return <>
    
    <div className="container">
        <form className="stampForm">
        <h2 className="stampForm__title">New Stamp</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="trip">Trip</label>
                <select
                    className="form-control"
                    onChange={ (event) => {handleTripChange(event)}}
                    >
                    <option value={0}>Select a trip...</option>
                    {
                        trips.map(trip => {
                            return <option value={trip.id} key={`trip--${trip.id}`}>{trip.name}</option>
                        })
                    }
                </select>
            </div>
        </fieldset>
        {
            itineraries.length > 0 ? (
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="itinerary">Itinerary (Optional)</label>
                        <select
                            className="form-control"
                            onChange={ (event) => {
                                setSelectedItinerary(parseInt(event.target.value))
                            }}
                            >
                            <option value={null}>Select an itinerary...</option>
                            {
                                itineraries.map(itinerary => {
                                    return <option value={itinerary.id} key={`itinerary--${itinerary.id}`}>{itinerary.name}</option>
                                })
                            }
                        </select>
                    </div>
                </fieldset>
            ) : ""
        }
        <fieldset>
            <div className="form-group">
                <label htmlFor="type">Stamp Type</label>
                <select
                    className="form-control"
                    onChange={ (event) => {
                        setSelectedType(parseInt(event.target.value))
                    }}
                    >
                    <option value={0}>Select a stamp type...</option>
                    {
                        types.map(type => {
                            return <option value={type.id} key={`type--${type.id}`}>{type.type}</option>
                        })
                    }
                </select>
            </div>
        </fieldset>
        {
            selectedType==1 ? <StampPhoto selectedTrip={selectedTrip} selectedItinerary={selectedItinerary} selectedType={selectedType}/> : ""
        }
        {
            selectedType==2 ? <StampJournal selectedTrip={selectedTrip} selectedItinerary={selectedItinerary} selectedType={selectedType}/> : ""
        }
        {
            selectedType==3 ? <StampProduct selectedTrip={selectedTrip} selectedItinerary={selectedItinerary} selectedType={selectedType}/> : ""
        }
        </form>
    </div>
    
    </>
}