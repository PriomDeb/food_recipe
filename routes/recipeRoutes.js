import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { createRecipeController } from "../controllers/recipeController.js";

const router = express.Router();

// Routes
router.post("/add-recipe", requireSignIn, createRecipeController);

export default router;
