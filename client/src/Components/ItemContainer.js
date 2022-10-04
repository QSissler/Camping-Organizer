import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemContainer(){
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('/items')
        .then((res) => res.json())
        .then(setItems)
    }, [])

    const itemsToDisplay = items.map((item) => {
        return <ItemCard item={item} key={item.id}/>
    })


    return(
        <div>
            <h1>Items</h1>
            {itemsToDisplay}
         </div>
    )
}

export default ItemContainer;