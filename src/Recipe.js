import React from "react";

const Recipe = ({ recipe, onClose }) => {
    return (
        <div className="recipe-container">
            <h2>{recipe.strMeal}</h2>
            <p>{recipe.strIntructions}</p>
            <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
                Watch video:
            </a>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Recipe;