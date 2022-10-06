import {useEffect, useState} from 'react';

function ItemForm({user, trips}){
    const [destinationName, setDestinationName] = useState("")
    const [itemName, setItemName] = useState("")
    const [itemCategory, setItemCategory] = useState("")
    const [chosenTrip, setChosenTrip] = useState([])
  


    function handleNameChange(e){
        setItemName(e.target.value)
    }

    function handleCategoryChange(e){
        setItemCategory(e)
    }

    function handleDestinationChange(e){
        setDestinationName(e)
    }

    function getChosenTrip(){
     const pickedTrip = trips.filter(trip => trip.destination === destinationName)
        setChosenTrip(pickedTrip)
    }

    useEffect(() => {
        getChosenTrip()
    }, [destinationName])

    function handleItemFormSubmit(e){
        e.preventDefault()
        
        
        let newItem = {
            name: itemName,
            category: itemCategory,
            packed: "false",
            trip_id: chosenTrip[0].id,
            user_id: user.id,
        }
        fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
            })
            .then(res => res.json())
            alert("Your item was added to your trip!")
            setDestinationName("")
            setItemName("")

    }

    const allTrips = trips.map(trip => {
        return (<option value={trip.destination} key={trip.id}>{trip.destination}</option>)
    })

    return(
        <div>
            <h1>Add an Item to a Trip!</h1>
            <form onSubmit={(e) => handleItemFormSubmit(e)} className="form">
        <select id="selectform" value={destinationName} onChange={(e) => handleDestinationChange(e.target.value)}>
            <option>Choose Trip</option>
        {allTrips}
        </select>
        <input type='text' placeholder="Item Name" name='name' value={itemName} onChange={(e) => handleNameChange(e)} />
          <input
          type="submit"
          name="submit"
          value="Add to Packing List"
        />
            </form>
         </div>
    )
}

export default ItemForm;