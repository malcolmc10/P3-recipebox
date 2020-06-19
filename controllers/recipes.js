const Recipe = require('../model/recipe.js')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find()
       return res.json(recipe)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe)
        }
        res.status(404).json({ message: 'Recipe not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        res.status(201).json(recipe)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateRecipe = async (req, res) => {
    const { id } = req.params
    await Recipe.findByIdAndUpdate(id, req.body, { new: true }, (error, recipe) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found!' })
        }
        res.status(200).json(recipe)
    })
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted")
        }
        throw new Error("Recipe not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const filter = async (req,res)=>{
    try {
        // const { filter } = (req.body);
        const filter = ["healthy", "dinner", "lunch", "american"]
        const filteredRecipes = filter.map(i => await Recipe.find({ filters: [i] }))


        
        // await Recipe.find({ filters: ["healthy", "lunch",] })
        
        // db.inventory.find( { qty: { $exists: true } } )
        // const activeAndLessThan25 = async () => {
        //     // const activeAndLessThan25 = await User.find({ $and: [{ status: "active"}, { age: { $lt: 25 }}]})
        //     // const activeAndLessThan25 = await User.find().and([{ status: "active" }, { age: { $lt: 25 }}])
        //     // const activeAndLessThan25 = await User.find({status: 'active', age: { $lt: 25 }})
        //     const activeAndLessThan25 = await User.find({ status: "active" }).where("age").lt(25)
        //     console.log(activeAndLessThan25)
        // }
        return res.json(filteredRecipes)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    filter
}