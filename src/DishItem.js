import React from "react";

const DishItem = ({ dish }) => {
  return (
    <div className="dish">
      <img src={dish.strMealThumb} alt={dish.strMeal} />
      <p>{dish.strMeal}</p>
      {/* {dish.strInstructions && (
        <div className="recipe">
          <h2>Recipe</h2>
          <p>{dish.strInstructions}</p>
          {dish.strSource && (
            <div>
              <img src={dish.strMealThumb} />
              <a
                href={dish.strSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch video
              </a>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default DishItem;
