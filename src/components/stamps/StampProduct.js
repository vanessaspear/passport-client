// Presents the product form for adding a new stamp with type = product

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { createStampProduct } from "../managers/StampManager";

export const StampProduct = ({ selectedTrip, selectedItinerary, selectedType}) => {

    const navigate = useNavigate()
    const [stamp, setStamp] = useState({
        name: "",
        description: "",
        link: "",
        trip: selectedTrip,
        itinerary: selectedItinerary,
        type: selectedType, 
        dateCreated: "",
        public: false
    })

    async function handleSubmit (event) {
        event.preventDefault()

        await createStampProduct(stamp)
            .then(() => navigate("/stamps"))
    }

    return <>
        <fieldset>
            <label htmlFor="name">Product Name</label>
            <input type="text" name="name" required autoFocus className="form-control"
                value={stamp.name}
                onChange={(event) => {
                    const copy = { ...stamp }
                    copy[event.target.name] = event.target.value
                    setStamp(copy)
                }}
            />
        </fieldset>
        <fieldset>
            <label htmlFor="description">Product Highlight</label>
            <textarea className="form-control" rows="4" name="description" value={stamp.description} onChange={(event) => {
                const copy = { ...stamp }
                copy[event.target.name] = event.target.value
                setStamp(copy)
            }}/>
        </fieldset>
        <fieldset>
            <label htmlFor="link">Product Link</label>
            <input type="text" name="link" required autoFocus className="form-control"
                value={stamp.link}
                onChange={(event) => {
                    const copy = { ...stamp }
                    copy[event.target.name] = event.target.value
                    setStamp(copy)
                }}
            />
        </fieldset>
        <fieldset>
            <label htmlFor="public">Public</label>
            <input type="checkbox" name="public" defaultChecked={stamp.public} onClick={(event) => {
                 const copy = { ...stamp }
                 copy[event.target.name] = event.target.checked
                 setStamp(copy)
            }} />
        </fieldset>
        <div className="row my-5 mx-5">
            <button className="btn btn-primary col-3" type="submit" onClick={(event) => {handleSubmit(event)}}>
            Save</button>
        </div>
    </>
}