import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { getItinerary, createItinerary, updateItinerary, getCategories } from "../managers/ItineraryManager"

export const ItineraryForm = () => {
    const navigate = useNavigate()
    const { tripId } = useParams()
    const [categories, setCategories] = useState([])
    const [itineraryCategories, setItineraryCategories] = useState(new Set())
    const [currentItinerary, setCurrentItinerary] = useState({
        name: "",
        itinerary_description: "",
        date: "",
        start_time: "",
        end_time: "",
        city: "",
        state_or_country: "",
        trip: tripId,
        categories: []
    })
    
    const categoryArr = (categoryId) => {
        let copy = new Set(itineraryCategories)
        copy.has(categoryId) ? copy.delete(categoryId) : copy.add(categoryId)
        setItineraryCategories(copy)
    }

    useEffect(() => {
        getCategories().then(data => setCategories(data))
    }, [])

    const changeItineraryState = (event) => {
        const copy = { ...currentItinerary }
        copy[event.target.name] = event.target.value
        setCurrentItinerary(copy)
    }


    return (
        <form className="itineraryForm">
            <h2 className="itineraryForm__title">Itinerary Information</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentItinerary.name}
                        onChange={changeItineraryState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="itinerary_description">Itinerary Description: </label>
                    <input type="text" name="itinerary_description" required autoFocus className="form-control"
                        value={currentItinerary.itinerary_description}
                        onChange={changeItineraryState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentItinerary.date}
                        onChange={changeItineraryState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="start_time">Start Time:</label>
                    <input type="time" name="start_time" required autoFocus className="form-control"
                        value={currentItinerary.start_time}
                        onChange={changeItineraryState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="end_time">End Time:</label>
                    <input type="time" name="end_time" required autoFocus className="form-control"
                        value={currentItinerary.end_time}
                        onChange={changeItineraryState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" required autoFocus className="form-control"
                        value={currentItinerary.city}
                        onChange={changeItineraryState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state_or_country">State / Country </label>
                    <input type="text" name="state_or_country" required autoFocus className="form-control"
                        value={currentItinerary.state_or_country}
                        onChange={changeItineraryState}
                    />
                </div>
                <div className="field">
                    <label htmlFor="content" className="label">Categories: </label>
                    {
                        categories.map(category => {
                            // Compare current category `id` and see if an object exists with that id in currentItinerary.categories
                            const foundCategory = currentItinerary.categories.find(itineraryCategory => category.id === itineraryCategory.id)

                            return <div key={`category--${category.id}`}>
                                <input type="checkbox" name={category.category}
                                    defaultChecked={foundCategory}
                                    onClick={() => categoryArr(category.id) } />
                                <label htmlFor={category.category}>{category?.category}</label><br/>
                            </div>
                        })

                    }</div>
            </fieldset>
            <div className="row my-5 mx-5">
                <button type="submit"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const itinerary = {
                            name: currentItinerary.name,
                            itinerary_description: currentItinerary.itinerary_description,
                            date: currentItinerary.date,
                            start_time: currentItinerary.start_time,
                            end_time: currentItinerary.end_time,
                            city: currentItinerary.city,
                            state_or_country: currentItinerary.state_or_country,
                            trip: tripId,
                            categories: Array.from(itineraryCategories)
                        }

                        createItinerary(itinerary).then(() => navigate(`/trips/${tripId}`))
                    }}
                    className="btn btn-primary col-3">Create</button>
                <Link to={`/trips/${tripId}`} className="btn btn-primary col-3">Close</Link>
            </div>
        </form>
    )
}
