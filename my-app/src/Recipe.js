import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div>
      <h1>{title}</h1>
      <li>List of Ingredients:
      {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
      ))}
      </li>
      <p>Calories: {calories}</p>
      <img src={image} alt=""/>    
    </div>
  )
}

export default Recipe;