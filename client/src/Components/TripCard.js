import { useState, useEffect } from "react";

import ItemCard from "./ItemCard";

function TripCard({trip, trip_items}){
console.log(trip_items)

       const itemsToDisplay = trip_items.map(item => {
        return <ItemCard item={item}  key={item.id}/>
    })

    return(
        trip_items.length === 0 ? (
        <div>
            <h2>{trip.destination}</h2>
         </div> ) : (
            <div className="wholeCard">
            <h2>{trip.destination}</h2>
                 {itemsToDisplay}
         </div>
         )
    )
}

export default TripCard;
