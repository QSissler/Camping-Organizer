import {useState} from 'react';
import {useHistory} from 'react-router-dom'


function TripForm({trips, setTrips}){
    const [destination, setDestination] = useState("")
    const history = useHistory()

    function handleDestinationChange(e){
        setDestination(e.target.value)
    }

    function handleTripFormSubmit(e){
        e.preventDefault();

        let newDestination = {
            destination : destination
        }

        fetch('/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDestination)
            })
            .then(res => res.json())
            .then(newTrip => setTrips([...trips, newTrip]))

        setDestination("")
    }

    return(
        <div>
            <h1>Add a Trip!</h1>
            <form onSubmit={e => handleTripFormSubmit(e)} className="form">
        <input type='text' placeholder="Destination" name='destination' value={destination} onChange={(e) => handleDestinationChange(e)} />
        <input
          type="submit"
          name="submit"
          value="Create New Trip"
        />
            </form>
         </div>
    )
}

export default TripForm;