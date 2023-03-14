import { Route, Outlet, Routes } from "react-router-dom"
import { Trips } from "../trips/Trips";
import { TripDetails } from "../trips/TripDetails";

export const ApplicationViews = () => {
	return (
    <Routes>
      <Route path="/home" element={<Outlet />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/trips/:tripId" element={<TripDetails />} />
    </Routes>
  );
}
