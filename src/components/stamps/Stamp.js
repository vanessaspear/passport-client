// Generates a stamp card based on the stamp type

export const Stamp = ({ stamp }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const formattedDate = date.toLocaleDateString('en-US', options)
        return formattedDate
    }

    const formatTime = (dateString) => {
        const date = new Date(dateString)
        const options = { hour: 'numeric', minute: 'numeric', hour12: true }
        const formattedTime = date.toLocaleTimeString('en-US', options)
        return formattedTime
    }

    if (stamp?.type?.id == 1) {
        return <>
            <div className="card" style={{width: 450}} key={`photo--${stamp.id}`}>
                <img src={`http://localhost:8000/${stamp.image}`} className="card-img-top" alt="Photo from trip"></img>
                <div className="card-body" style={{height: "auto"}}>
                    <h5 className="card-title">{formatDate(stamp.date_created)} @ {formatTime(stamp.date_created)}</h5>
                    <p className="card-text">{stamp.description}</p>
                </div>
            </div>
        </>
    }
    else if (stamp?.type?.id == 2){
        return <>This is a journal stamp</>
    }
    else {
        return <>This is a product stamp</>
    }
    
}