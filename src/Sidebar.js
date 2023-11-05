import React from "react";

function Sidebar({ cuisines, onCuisineClick }) {
    return (
        <div className="sidebar">
            <h2>Cuisines</h2>
            <ul>
                {cuisines.map((cuisine) => (
                    <li key={cuisine.strCategory}>
                        <button onClick={() => onCuisineClick(cuisine)}>
                            {cuisine.strCategory}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;
