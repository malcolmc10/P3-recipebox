const db = require('../db/connection')
const Recipe = require('../model/recipe.js')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes =
        [
            {
                "title": "Fennel and Chicken Stew",
                "coverImage": "https://imgur.com/3znSL1M",
                "servesPeople": 4,
                "cookTime": 1,
                "cookTimeUnit": "Hour",
                // "score": "0",
                "ingredients": [
                    {
                        "amount": 1,
                        "unit": "tsp",
                        "name": "olive oil",
                        "consistency": "",
                        "meta": ""
                    },
                    {
                        "amount": 3,
                        "unit": "clove",
                        "name": "garlic",
                        "consistency": "minced",
                        "meta": ""
                    },
                    {
                        "amount": .5,
                        "unit": "cup",
                        "name": "onions",
                        "consistency": "diced",
                        "meta": ""
                    },
                    {
                        "amount": 1,
                        "unit": "cup",
                        "name": "celery",
                        "consistency": "diced",
                        "meta": ""
                    },
                    {
                        "amount": 1,
                        "unit": "tsp",
                        "name": "fennel seeds",
                        "consistency": "ground",
                        "meta": ""
                    },
                    {
                        "amount": 3,
                        "unit": "",
                        "name": "plum tomatoes",
                        "consistency": "diced",
                        "meta": ""
                    },
                    {
                        "amount": 4,
                        "unit": "cup",
                        "name": "chicken broth",
                        "consistency": "",
                        "meta": ""
                    },
                    {
                        "amount": 2,
                        "unit": "",
                        "name": "chicken breasts",
                        "consistency": "diced",
                        "meta": ""
                    },
                    {
                        "amount": 2,
                        "unit": "",
                        "name": "potatoes",
                        "consistency": "",
                        "meta": ""
                    },
                    {
                        "amount": 1,
                        "unit": "pinch",
                        "name": "garlic powder",
                        "consistency": "",
                        "meta": ""
                    },
                    {
                        "amount": null,
                        "unit": "",
                        "name": "black pepper",
                        "consistency": "",
                        "meta": "to taste"
                    }
                ],
                "preparation": [
                    {
                        "step": 1,
                        "description": "Sauté the olive oil, garlic, and onion over medium heat in a large nonstick stockpot.",
                        "stepImage": "https://imgur.com/mVgiec0"
                    },
                    {
                        "step": 2,
                        "description": "Add the celery and fennel and sauté briefly, then add the tomatoes.",
                        "stepImage": "https://imgur.com/J6UU6Yw"
                    },
                    {
                        "step": 3,
                        "description": "Add the broth, chicken, potatoes, and seasonings. Cook at a simmer over medium heat until the chicken is done and the potatoes are tender, about 20-25 minutes.",
                        "stepImage": "https://imgur.com/7QIhXPs"
                    }
                ],
                "filters": [
                    {
                        "healthy": "true",
                        "seasonal": "false",
                        "min30": "false",
                        "glutenFree": "false",
                        "vegetarian": "false",
                        "breakfast": "false",
                        "lunch": "false",
                        "dinner": "true",
                        "dessert": "false",
                        "snack": "false",
                        "indian": "false",
                        "thai": "false",
                        "japanese": "false",
                        "french": "false",
                        "italian": "false",
                        "mexican": "false",
                        "american": "true",
                        "canadian": "false",
                        "korean": "false",
                        "polish": "false"
                    }
                ],
                "comments": [
                    {
                        "commentAuthor": "Dan Dalgatov",
                        "commentDetails": "This dish is perfect for a hungry developer",
                        "commentTime": "1592459790537"
                    }
                ]
            }
        ]
    await Recipe.insertMany(recipes)
    console.log("Created recipes!")
}
const run = async () => {
    await main()
    db.close()
}
run()