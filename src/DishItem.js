// import React, { useState } from 'react';

// function DishItem({ dish }) {
//   const [isInfoVisible, setIsInfoVisible] = useState(false);

//   const toggleInfoVisibility = () => {
//     setIsInfoVisible(!isInfoVisible);
//   };

//   console.log(dish);

//   return (
//     <div className="dish" onClick={toggleInfoVisibility}>
//       <img src={dish.strMealThumb} alt={dish.strMeal} />
//       {isInfoVisible && (
//         <div className="dish-info">
//           <h3>{dish.strMeal}</h3>
//           <p>Recipe: {dish.strInstructions}</p>
//           <p>Source: <a href={dish.strSource} target="_blank" rel="noopener noreferrer">{dish.strSource}</a></p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DishItem;

import React from "react";

const DishItem = ({dish}) => {
    return (
        <div className="dish">
            <img src={dish.strMealThumb} alt={dish.strMeal} />
            <p>{dish.strMeal}</p>
        </div>
    );
};

export default DishItem;