import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, List, ListItem } from '@mui/material';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`/api/recipes/${id}.json`).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Card.Media component="img" src={recipe.image} alt={recipe.title} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <List>
          <h2>Ingredients:</h2>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem key={index} className="list-inside list-disc pl-8">
              {ingredient}
            </ListItem>
          ))}
        </List>
        <h2>Cooking Instructions:</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index} className="list-inside list-decimal pl-8">
              {step}
            </li>
          ))}
        </ol>
      </Card.Body>
    </Card>
  );
}

export default RecipeDetail;