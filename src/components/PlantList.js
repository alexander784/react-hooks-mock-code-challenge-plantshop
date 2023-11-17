import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plant, setPlant ]= useState([]);
//Use useEffect to fetch data when the component mounts 
  useEffect (() => {
    fetch('http://localhost:6001/plants')
    .then((response) => response.json())
    .then((data) => setPlant(data))
    .catch((error) => console.error("Error Fetching Plant:", error));
  }, []); //Empty dependecy array to ensure the effect runs only once.
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plant.map((plant, index) => (
      <PlantCard 
      key={index} //Each plant should have a unique key
      name={plant.name}
      price={plant.price}
      inStock={plant.inStock}
      />
      ))}
      </ul>
  );
}

export default PlantList;
