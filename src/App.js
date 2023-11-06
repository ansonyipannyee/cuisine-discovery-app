import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";

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
      <Home
        cuisines={cuisines}
        selectedCuisine={selectedCuisine}
        dishes={dishes}
        loading={loading}
        isSidebarOpen={isSidebarOpen}
        onCuisineClick={onCuisineClick}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;