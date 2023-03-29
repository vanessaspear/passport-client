//Generates the trip card to be displayed in the trip list

import { Link } from "react-router-dom"
import './Trips.css'

export const Trip = ({ trip }) => {

    return <>
        <div className="col-sm-6">
            <div className="card card-color my-5 mx-5">
                <div className="card-body">
                    <h5 className="card-title mb-3">{trip.name}</h5>
                    <p className="card-text">
                        {trip.departure_date} through {trip.return_date}
                    </p>
                    <p className="card-text">
                        {trip.city}, {trip.state_or_country}
                    </p>
                    <Link to={`/trips/${trip.id}`} className="btn btn-outline-primary">View Trip Details</Link>
                </div>
            </div>
        </div>
    </>
}