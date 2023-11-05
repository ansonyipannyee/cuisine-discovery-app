import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => response.json())
      .then((data) => {
        setCuisines(data.meals);
      })
      .catch((error) => console.error("Error fetching cuisines:", error));
  }, []);

  const onCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine.strArea}`)
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.meals);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching dishes:', error));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <div className="sidebar-container">
        <button className="sidebar-button" onClick={toggleSidebar}>
          ☰
        </button>
        {isSidebarOpen && (
          <Sidebar cuisines={cuisines} onCuisineClick={onCuisineClick} />
        )}
      </div>
      {loading ? (
        <p>Loading dishes...</p>
      ) : (
        <div className="dishes-list">
          {selectedCuisine ? (
            <h2>{selectedCuisine.strArea} Dishes</h2>
          ) : (
            <h2>Select a Cuisine</h2>
          )}
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
