import {useState} from 'react';

function ItemForm(){
    const [destinationName, setDestinationName] = useState("")
    const [itemName, setItemName] = useState("")
    const [itemImage, setItemImage] = useState("")
    const [itemCategory, setItemCategory] = useState("")


    function handleNameChange(e){
        setItemName(e.target.value)
    }

    function handleImageChange(e){
        setItemImage(e.target.value)
    }

    function handleCategoryChange(e){
        setItemCategory(e.target.value)
    }

    function handleDestinationChange(e){
        setDestinationName(e.target.value)
    }

    return(
        <div>
            <h1>Add an Item to a Trip!</h1>
            <form>
            <label>
          Trip Destination
          </label>
        <input type='text' name='name' value={destinationName} onChange={(e) => handleDestinationChange(e)} />
        <label>
          Item Name
          </label>
        <input type='text' name='name' value={itemName} onChange={(e) => handleNameChange(e)} />
            <label>
          Item Image
          </label>
        <input type='text' name='image' value={itemImage} onChange={(e) => handleImageChange(e)} />
        <label>
          Item Category
          </label>
          <select id="selectform" value={itemCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="All">Category</option>
            <option value="General Camping Gear">General Camping Gear</option>
            <option value="Food">Food</option>
            <option value="Fun">Fun</option>
          </select>
          <input
          type="submit"
          name="submit"
          value="Add Camping Item"
        />
            </form>
         </div>
    )
}

export default ItemForm;