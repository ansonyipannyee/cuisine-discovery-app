import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import DishItem from "./DishItem";
import globe from "./globe.mp4";
// import SearchBar from "./Searchbar";

function App() {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.json())
      .then((data) => {
        setCuisines(data.meals);
      })
      .catch((error) => console.error("Error fetching cuisines:", error));
  }, []);

  const onCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
    setIsSidebarOpen(false);

    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine.strArea}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.meals);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching dishes:", error));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <div className="background-video">
        <video src={globe} autoPlay loop muted />
      </div>
      <div className="header-container">
        <div className="sidebar-container">
          <button className="sidebar-button" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
        {isSidebarOpen && (
          <Sidebar
            cuisines={cuisines}
            onCuisineClick={onCuisineClick}
            onCloseClick={toggleSidebar}
          />
        )}
      </div>
      <div className="main-header">
        <h2>foods of the world.</h2>
      </div>
      {loading ? (
        <p>Loading dishes...</p>
      ) : (
        <div className="dishes-list">
          {selectedCuisine ? (
            <h2 className="cuisine-title">{selectedCuisine.strArea} Dishes</h2>
          ) : (
            <p> </p>
          )}
          <ul className="dishes-container">
            {dishes.map((dish) => (
              <DishItem key={dish.idMeal} dish={dish} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
