import React from "react";

function Sidebar({ cuisines, onCuisineClick }) {
    return (
        <div className="sidebar">
            <h2>Cuisines</h2>
            <ul>
                {cuisines.map((cuisine) => (
                    <li key={cuisine.strArea}>
                        <button onClick={() => onCuisineClick(cuisine)}>
                            {cuisine.strArea}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;
