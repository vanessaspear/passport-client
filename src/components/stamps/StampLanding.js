//Primary page for stamps' components

import { TripsMap } from "./TripsMap"
import { Link } from 'react-router-dom'
import { StampsList } from "./StampsList"

export const Stamps = () => {
    
    return <>
        <TripsMap />

        <div className="container">
            <div className="row my-4 mx-5">
                <Link to={`/stamps/new`} className="btn btn-primary col-3">Add Stamp</Link>
            </div>
        </div>
        <StampsList />
    </>
}