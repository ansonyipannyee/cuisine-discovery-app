import React from "react";
import globe from "./globe.mp4";
import Sidebar from "./Sidebar";
import DishItem from "./DishItem";

function Home({
  cuisines,
  selectedCuisine,
  dishes,
  loading,
  isSidebarOpen,
  onCuisineClick,
  toggleSidebar,
}) {
  return (
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

export default Home;