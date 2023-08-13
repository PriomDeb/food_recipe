import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { createRecipeController } from "../controllers/recipeController.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes
router.post("/add-recipe", requireSignIn, formidable(), createRecipeController);

export default router;
