import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import DishItem from "./DishItem";
import globe from "./globe.mp4";

function App() {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleHomepageClick = () => {
    setLoading(false);
    setIsSidebarOpen(false);
    setDishes([]);
    setSelectedCuisine(null);
    setSearchQuery("");
  };

  const handleSearch = () => {
    setLoading(true);
    setIsSidebarOpen(false);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.meals);
        setSelectedCuisine(null);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching dishes:", error));
  };

  return (
    <div className="App">
      <div className="homepage">
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
          <button onClick={handleHomepageClick} className="homepage-button">
            ⌂
          </button>
        </div>
        <div className="title-and-search">
          <h2 className="main-header">foods of the world.</h2>

          <div className="search-bar">
            <input
              className="input-field"
              type="text"
              placeholder="Search recipe"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="search-button">
              ⌕
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <p></p>
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
