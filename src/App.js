import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const selectCuisine = (cuisine) => {
    setSelectedCuisine(cuisine);
    setIsSidebarOpen(false);
  };

  return (
    <div className="App">
      <button
        className="sidebar-icon"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
      {isSidebarOpen && (
        <Sidebar cuisines={cuisines} selectCuisine={selectCuisine} />
      )}
    </div>
  );
}

export default App;
