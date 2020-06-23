const { Router } = require("express")
const control = require("../controllers/recipes");

const router = Router()

router.get("/recipes", control.getRecipes);
router.get("/recipes/filter", control.filter);
router.get("/recipes/:id", control.getRecipe);
router.post("/recipes", control.createRecipe);
router.put("/recipes/:id", control.updateRecipe);
router.delete("/recipes/:id", control.deleteRecipe);
router.put("/recipes/:recipeId/comments/:id", control.updateComments)
router.delete("/recipes/:recipeId/comments/:id", control.deleteComment)

module.exports = router;