import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({});

  // Initial details
  useEffect(() => {
    if (params?.slug) getRecipe();
  }, [params?.slug]);

  // Get Recipe
  const getRecipe = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/recipe/get-recipe/${params.slug}`
      );
      setRecipe(data?.recipe);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/recipe/recipe-image/${recipe._id}`}
            className="card-img-top recipe-image"
            alt={recipe.title}
          />
        </div>

        <div className="col-md-6">
          <div className="recipe-details">
            <h1 className="text-center">Recipe Details</h1>
            <div className="detail-item">
              <h6 className="detail-title">Name:</h6>
              <p className="detail-value">{recipe.title}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Category:</h6>
              <p className="detail-value">{recipe.category?.name}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Description:</h6>
              <p className="detail-value">{recipe.description}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Ingredients:</h6>
              <p className="detail-value">{recipe.ingredients}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Instructions:</h6>
              <p className="detail-value">{recipe.instructions}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Preparation Time:</h6>
              <p className="detail-value">{recipe.preparationTime} minutes</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Cooking Time:</h6>
              <p className="detail-value">{recipe.cookingTime} minutes</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Total Time:</h6>
              <p className="detail-value">{recipe.totalTime} minutes</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Servings:</h6>
              <p className="detail-value">{recipe.servings}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Difficulty:</h6>
              <p className="detail-value">{recipe.difficulty}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Cuisine:</h6>
              <p className="detail-value">{recipe.cuisine}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Dietary Information:</h6>
              <p className="detail-value">{recipe.dietaryInformation}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Calories:</h6>
              <p className="detail-value">{recipe.calories} kcal</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Nutritional Information:</h6>
              <p className="detail-value">{recipe.nutritionalInformation}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Author:</h6>
              <p className="detail-value">{recipe.author}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Tags:</h6>
              <p className="detail-value">{recipe.tags}</p>
            </div>
            <div className="detail-item">
              <h6 className="detail-title">Notes:</h6>
              <p className="detail-value">{recipe.notes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">Similar Recipes</div>
    </Layout>
  );
};

export default RecipeDetails;
