import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createRecipeController,
  getRecipes,
  getSingleRecipe,
  recipeImageController,
} from "../controllers/recipeController.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes
router.post("/add-recipe", requireSignIn, formidable(), createRecipeController);

// Get All Recipes
router.get("/get-recipe", getRecipes);

// Single Get
router.get("/get-recipe/:slug", getSingleRecipe);

// Get Image
router.get("/recipe-image/:rid", recipeImageController);

export default router;
