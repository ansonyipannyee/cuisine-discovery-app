import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.json())
      .then((data) => {
        setCuisines(data.meals);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching cuisines:", error));
  }, []);

  useEffect(() => {
    if (selectedCuisine) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCuisine.strCategory}`)
        .then((response) => response.json())
        .then((data) => setDishes(data.meals))
        .catch((error) => console.error("Error fetching dishes:", error));
    }
  }, [selectedCuisine]);

  return (
    <div className="App">
      <h1>Cuisine Discovery</h1>
      {loading ? (
        <p>Loading cuisines...</p>
      ) : (
        <div className="cuisine-list">
          <h2>Cuisines</h2>
          <ul>
            {cuisines.map((cuisine) => (
              <li key={cuisine.strCategory}>
                <button onClick={() => setSelectedCuisine(cuisine)}>
                  {cuisine.strCategory}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedCuisine && (
        <div className="dishes-list">
          <h2>Dishes from {selectedCuisine.strCategory}</h2>
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
