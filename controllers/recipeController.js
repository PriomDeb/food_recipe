import recipeModel from "../models/recipeModel.js";

export const createRecipeController = async (req, res) => {
  try {
    const recipe = await recipeModel();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while creating recipe",
    });
  }
};
