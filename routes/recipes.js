const { Router } = require("express")
const control = require("../controllers/recipes");

const router = Router()

router.get("/",function(req,res){
    res.send("hello world")
})

router.get("/recipes", control.getRecipes);
router.get("/recipes/:id", control.getRecipe);
router.post("/recipes", control.createRecipe);
router.put("/recipes/:id", control.updateRecipe);
router.delete("/recipes/:id", control.deleteRecipe);

module.exports = router;