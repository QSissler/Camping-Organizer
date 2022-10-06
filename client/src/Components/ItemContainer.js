import { useState, useEffect } from "react";
import TripCard from "./TripCard";

function ItemContainer({trips}){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/me')
        .then((res) => res.json())
        .then(items => setItems(items.grouped_items))
    }, [])

    const tripsToDisplay = trips.map(trip => {
       return <TripCard trip={trip} trip_items={items[trip.id]} key={trip.id}/>
    })


    return(
        items.length === 0 ? (
            <div>
            <h1 className="packingHeader">Packing Lists</h1>
         </div>) : ( 
            <div>
            <h1 className="packingHeader">Packing Lists</h1>
            <div className="lists">
            {tripsToDisplay}
            </div>
         </div>
         )
    )
}

export default ItemContainer;