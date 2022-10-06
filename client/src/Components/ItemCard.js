import { useState } from "react";
import {useHistory} from 'react-router-dom'

function ItemCard({item}){
    const [isChecked, setIsChecked] = useState(item.packed)
    const history = useHistory()

    function handleCheckChange(){
        fetch(`/items/${item.id}`, {
        method: "PATCH",
         headers: {
        "Content-Type": "application/json",
        },
         body: JSON.stringify({
           packed: !item.packed,
         }),
     })
      .then((res) => res.json())
      .then(console.log);

      setIsChecked(!isChecked)
    }

    function handleItemDelete(){
        fetch(`/items/${item.id}`, {
        method: "DELETE",
        })
        alert("Your item was deleted!")
        window.location.reload()
        
}

    return(
        <div className="itemCard">
            <h3>{item.name}</h3>
            <label> 
                <input 
                className="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckChange}/>
            </label>
            <button className="deleteButton" onClick={handleItemDelete}>X</button>
         </div>
    )
}

export default ItemCard;