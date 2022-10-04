import {useState} from 'react';

function TripForm(){
    const [destination, setDestination] = useState("")

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
            .then(console.log)

        setDestination("")
    }

    return(
        <div>
            <h1>Add a Trip!</h1>
            <form onSubmit={e => handleTripFormSubmit(e)}>
        <label>
          Destination
          </label>
        <input type='text' name='destination' value={destination} onChange={(e) => handleDestinationChange(e)} />
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