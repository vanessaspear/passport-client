// Presents the photo form for adding a new stamp with type = photo

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { createStampPhoto } from "../managers/StampManager";
import { Link } from "react-router-dom"

export const StampPhoto = ({ selectedTrip, selectedItinerary, selectedType}) => {

    const navigate = useNavigate()
    const [stamp, setStamp] = useState({
        image: null,
        description: "",
        trip: selectedTrip,
        itinerary: selectedItinerary,
        type: selectedType, 
        public: false
    })

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    const createStampImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            
            const copy = { ...stamp }
            copy["image"] = base64ImageString
            setStamp(copy)
        });
    }

    async function handleSubmit (event) {
        event.preventDefault()

        await createStampPhoto(stamp)
            .then(() => navigate("/stamps"))
    }

    return <>
        <fieldset>
            <label htmlFor="stamp_image">Photo</label>
            <input type="file" name="stamp_image" accept="image/*" onChange={createStampImageString} />
        </fieldset>
        <fieldset>
        <fieldset>
            <label htmlFor="description">Caption</label>
            <input type="text" name="description" required autoFocus className="form-control"
                value={stamp.description}
                onChange={(event) => {
                    const copy = { ...stamp }
                    copy[event.target.name] = event.target.value
                    setStamp(copy)
                }}
            />
        </fieldset>
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