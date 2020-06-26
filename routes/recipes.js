const { Router } = require("express")
const control = require("../controllers/recipes")

const router = Router()


//* Search
// router.get("/recipes/filter", control.filter)
router.get("/recipes/search", control.search)

//* Recipes
router.get("/recipes", control.getRecipes)
router.get("/recipes/:id", control.getRecipe)

router.post("/recipes", control.createRecipe)
router.put("/recipes/:id", control.updateRecipe)
router.delete("/recipes/:id", control.deleteRecipe)

//* Comments
router.post("/recipes/:id/comments", control.addComment)
router.put("/recipes/:recipeId/comments/:id", control.updateComment)
router.delete("/recipes/:recipeId/comments/:id", control.deleteComment)


module.exports = router