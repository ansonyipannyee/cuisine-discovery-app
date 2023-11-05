import React from "react";
import "./Sidebar.css";

function Sidebar({ cuisines, selectCuisine }) {
    return (
        <div className="sidebar">
            <ul>
                {cuisines.map((cuisine) => (
                    <li key={cuisine.strArea} onClick={() => selectCuisine(cuisine)}>
                        {cuisine.strArea}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;
