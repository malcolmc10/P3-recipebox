const Recipe = require("../model/recipe.js");
const db = require("../db/connection");
const mongoose = require("mongoose")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.find();
    return res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      return res.json(recipe);
    }
    res.status(404).json({ message: "Recipe not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  await Recipe.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, recipe) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found!" });
      }
      res.status(200).json(recipe);
    }
  );
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Recipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Recipe deleted");
    }
    throw new Error("Recipe not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const search = async (req, res) => {
  try {
    const recipes = await Recipe.find({ tags: new RegExp(`^${req.query.q}$`, 'i') })
    return res.json(recipes)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const filter = async (req, res) => {
  try {
    let result = "[";
    for (let [key, value] of Object.entries(req.body)) {
      result += `{"filters.${key}": ${value}},`;
    }
    result = result.substring(0, result.length - 1) + "]";

    const filteredRecipes = await Recipe.find({ $and: JSON.parse(result) });
    return res.json(filteredRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = req.body;
    const recipe = await Recipe.findByIdAndUpdate(
      id, { $push: { comments: comment } }, { new: true }
    );
    return res.json(recipe)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateComment = async (req, res) => {
  const { id, recipeId } = req.params;
  const recipe = await Recipe.findById(recipeId)
  const oldComment = recipe.comments.id(id)
  oldComment.set(req.body)
  try {
    const updated = await recipe.save()
    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id, recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);
    recipe.comments.id(id).remove()
    recipe.save()
    return res.status(200).json(recipe.comments);


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  filter,
  search,
  updateComments,
  deleteComment
};
