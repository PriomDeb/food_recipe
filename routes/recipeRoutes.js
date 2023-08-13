import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createRecipeController,
  getRecipes,
} from "../controllers/recipeController.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes
router.post("/add-recipe", requireSignIn, formidable(), createRecipeController);

// Get All Recipes
router.get("/get-recipe", getRecipes);

export default router;
