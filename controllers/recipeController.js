import slugify from "slugify";
import recipeModel from "../models/recipeModel.js";
import fs from "fs";

export const createRecipeController = async (req, res) => {
  try {
    const {
      title,
      slug,
      category,
      description,
      ingredients,
      instructions,
      preparationTime,
      cookingTime,
      totalTime,
      servings,
      difficulty,
      cuisine,
      dietaryInformation,
      calories,
      nutritionalInformation,
      author,
      tags,
      notes,
    } = req.fields;
    const { image } = req.files;

    // Validation
    switch (true) {
      case !title:
        return res.status(400).send({ error: "Title is required." });
      case !slug:
        return res.status(400).send({ error: "Slug is required." });
      case !category:
        return res.status(400).send({ error: "Category is required." });
      case !image && image.size > 1000000:
        return res.status(400).send({ error: "Image is required." });
      case !description:
        return res.status(400).send({ error: "Description is required." });
      case !ingredients:
        return res.status(400).send({ error: "Ingredients are required." });
      case !instructions:
        return res.status(400).send({ error: "Instructions are required." });
      case !preparationTime:
        return res.status(400).send({ error: "Preparation time is required." });
      case !cookingTime:
        return res.status(400).send({ error: "Cooking time is required." });
      case !totalTime:
        return res.status(400).send({ error: "Total time is required." });
      case !servings:
        return res.status(400).send({ error: "Servings are required." });
      case !difficulty:
        return res.status(400).send({ error: "Difficulty is required." });
      case !cuisine:
        return res.status(400).send({ error: "Cuisine is required." });
      case !nutritionalInformation:
        return res
          .status(400)
          .send({ error: "Nutritional information is required." });
      case !author:
        return res.status(400).send({ error: "Author is required." });
      default:
        // Your logic for processing the recipe data
        break;
    }

    const recipe = new recipeModel({ ...req.fields, slug: slugify(title) });
    if (image) {
      recipe.image.data = fs.readFileSync(image.path);
      recipe.image.contentType = image.type;
    }

    await recipe.save();
    res.status(201).send({
      success: true,
      message: "Recipe added successfully",
      recipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while creating recipe",
    });
  }
};

// Get All Recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel
      .find({})
      .populate("category")
      .select("-image")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      total_recipes: recipes.length,
      message: "Successfully get all recipes",
      recipes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting all recipes",
      error: error.message,
    });
  }
};

// Get Single Recipe
export const getSingleRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel
      .findOne({ slug: req.params.slug })
      .select("-image")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single product fetched",
      recipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single recipe",
      error,
    });
  }
};

// Get Image
export const recipeImageController = async (req, res) => {
  try {
    const recipe = await recipeModel.findById(req.params.rid).select("image");
    if (recipe.image.data) {
      res.set("Content-type", recipe.image.contentType);
      return res.status(200).send(recipe.image.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting image",
      error,
    });
  }
};

// Delete Recipe
export const deleteRecipeController = async (req, res) => {
  try {
    await recipeModel.findByIdAndDelete(req.params.rid).select("-image");
    res.status(200).send({
      success: true,
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error while deleting recipe",
      error,
    });
  }
};
