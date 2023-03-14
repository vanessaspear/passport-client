import { Route, Outlet, Routes } from "react-router-dom"
import { Trips } from "../trips/Trips"
import { TripDetails } from "../trips/TripDetails"
import { TripForm } from "../trips/TripForm"

export const ApplicationViews = () => {
	return (
    <Routes>
      <Route path="/home" element={<Outlet />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/trips/new" element={<TripForm />} />
      <Route path="/trips/edit/:tripId" element={<TripForm />} />
      <Route path="/trips/:tripId" element={<TripDetails />} />
    </Routes>
  );
}
