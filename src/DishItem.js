import React from "react";

const DishItem = ({ dish }) => {
  return (
    <div className="dish">
      <img src={dish.strMealThumb} alt={dish.strMeal} />
      <p>{dish.strMeal}</p>
    </div>
  );
};

export default DishItem;
