import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
// import NewPlantForm from "./NewPlantForm";
import AddPlant from "./AddPlant";

function App() {
  const [plants,setPlant] = useState([]);


  const addPlant = (newPlant) => {
    setPlant([...plants, newPlant]);
  }


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
