import React, { useState } from "react";


const AddPlant = ( {onAddPlant}) => {
  const [plantName, setPlantName] = useState('');
  const [imageUrl, setImageUrl] =useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //VAlidate form inputs
    if (!plantName || !imageUrl || !price) {
      alert( 'Please ill all fields.');
      return;
    }

    onAddPlant( {plantName, imageUrl, price});

    //Clear form inputs
    setPlantName('');
    setImageUrl('');
    setPrice('');
  };


  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}


export default AddPlant;
