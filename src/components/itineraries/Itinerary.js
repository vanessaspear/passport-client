//Generates the itinerary card to be displayed in the itinerary list

import { Link } from "react-router-dom"

export const Itinerary = ({ itinerary }) => {

    return <>
        <div className="col-sm-6">
            <div className="card my-5 mx-5">
                <div className="card-body">
                    <h5 className="card-title mb-3">{itinerary.name}</h5>
                    <p className="card-text">
                        {itinerary.date}
                    </p>
                    <p className="card-text">
                        {itinerary.start_time} through {itinerary.end_time}
                    </p>
                    <p className="card-text">
                        {itinerary.city}, {itinerary.state_or_country}
                    </p>
                    <p className="card-text">
                        Category: {
                            itinerary?.categories?.map(category => category?.category).join(", ")
                        }
                    </p>  
                    <Link to={`/itineraries/${itinerary.id}`} className="btn btn-outline-primary btn-sm">View Itinerary Details</Link>
                </div>
            </div>
        </div>
    </>
}