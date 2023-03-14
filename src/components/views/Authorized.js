import { Navigate, useLocation } from "react-router-dom"

export const Authorized = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem("passport_token")) {
        return children
    }
    else {
        return <Navigate
            to={`/home/${location.search}`}
            replace
            state={{ location }} />
    }
}

