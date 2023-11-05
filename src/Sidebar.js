import React from "react";

const Sidebar = ({ cuisines, onCuisineClick }) => {
    return (
        <div className="sidebar">
            <ul>
                {cuisines.map((cuisine) => (
                    <li key={cuisine.strArea}>
                        <button onClick={() => onCuisineClick(cuisine)}> {cuisine.strArea}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;
