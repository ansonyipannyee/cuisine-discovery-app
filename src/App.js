import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => response.json())
      .then((data) => {
        setCuisines(data.meals);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching cuisines:", error));
  }, []);

  useEffect(() => {
    if (selectedCuisine) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCuisine.strArea}`
      )
        .then((response) => response.json())
        .then((data) => setDishes(data.meals))
        .catch((error) => console.error("Error fetching dishes:", error));
    }
  }, [selectedCuisine]);

  return (
    <div className="App">
      <h1>Cuisine Discovery</h1>
      <nav className="navbar">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine.strArea}
            onClick={() => setSelectedCuisine(cuisine)}
            className={selectedCuisine === cuisine ? "active" : ""}
          >
            {cuisine.strArea}
          </button>
        ))}
      </nav>
      {loading ? (
        <p>Loading cuisines...</p>
      ) : (
        <div className="dishes-list">
          <h2>Dishes from {selectedCuisine ? selectedCuisine.strArea : "Selected Cuisine"}</h2>
          <ul>
            {dishes.map((dish) => (
              <li key={dish.idMeal}>{dish.strMeal}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
