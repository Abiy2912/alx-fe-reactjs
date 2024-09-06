import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <Link to={`/details/${recipe.id}`}>
        <h2>{recipe.title}</h2>
      </Link>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;