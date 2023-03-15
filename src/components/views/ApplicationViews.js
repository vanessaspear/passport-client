import { Route, Outlet, Routes } from "react-router-dom"
import { Trips } from "../trips/Trips"
import { TripDetails } from "../trips/TripDetails"
import { TripForm } from "../trips/TripForm"
import { Itineraries } from "../itineraries/Itineraries"
import { ItineraryDetails } from "../itineraries/ItineraryDetails"
import { ItineraryForm } from "../itineraries/ItineraryForm"

export const ApplicationViews = () => {
	return (
    <Routes>
      <Route path="/home" element={<Outlet />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/trips/:tripId" element={<TripDetails />} />
      <Route path="/trips/new" element={<TripForm />} />
      <Route path="/trips/edit/:tripId" element={<TripForm />} />
      <Route path="/itineraries" element={<Itineraries />} />
      <Route path="/itineraries/:itineraryId" element={<ItineraryDetails />} />
      <Route path="/itineraries/new" element={<ItineraryForm />} />
      <Route path="/itineraries/edit/:itineraryId" element={<ItineraryForm />} />
    </Routes>
  );
}
