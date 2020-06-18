const { Router } = require("express")
const control = require("../controllers/recipes");

const router = Router()



router.get("/recipes", control.getRecipes);
router.get("/recipes", control.filter); // Change this as recipes come along and fix controller for it as well 
router.get("/recipes/:id", control.getRecipe);
router.post("/recipes", control.createRecipe);
router.put("/recipes/:id", control.updateRecipe);
router.delete("/recipes/:id", control.deleteRecipe);

module.exports = router;