import {useEffect, useState} from 'react'
import TripCard from './TripCard'


function Trips(){
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch("/trips")
        .then(res => res.json())
           .then(setTrips)
           }, [])

    const tripsToDisplay = trips.map(trip => {
        return <TripCard trip={trip} key={trip.id}/>
    })
    return(
        <div>
            <h1>Your Upcoming Trips</h1>
            {tripsToDisplay}
         </div>
    )
}

export default Trips;