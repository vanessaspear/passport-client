
export const getTrips = () => {
    return fetch(`http://localhost:8000/trips`)
        .then( res => res.json() ) 
}