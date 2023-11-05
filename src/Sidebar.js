import React from "react";

function Sidebar({ cuisines, onCuisineClick, onCloseClick }) {
  return (
    <div className="sidebar">
      <button onClick={onCloseClick} className="close-button">
        &times;
      </button>
      <ul>
        {cuisines.map((cuisine) => (
          <li key={cuisine.strArea}>
            <button className="cuisine-button" onClick={() => onCuisineClick(cuisine)}>
              {cuisine.strArea}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
