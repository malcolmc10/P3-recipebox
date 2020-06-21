const db = require("../db/connection");
const Recipe = require("../model/recipe.js");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const recipes = [
    {
      title: "Fennel and Chicken Stew",
      coverImage: "https://i.imgur.com/3znSL1M.png",
      servesPeople: 4,
      cookTime: 1,
      cookTimeUnit: "Hour",
      ingredients: [
        {
          amount: 1,
          unit: "tsp",
          name: "olive oil",
          consistency: "",
          meta: "",
        },
        {
          amount: 3,
          unit: "clove",
          name: "garlic",
          consistency: "minced",
          meta: "",
        },
        {
          amount: 0.5,
          unit: "cup",
          name: "onions",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 1,
          unit: "cup",
          name: "celery",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 1,
          unit: "tsp",
          name: "fennel seeds",
          consistency: "ground",
          meta: "",
        },
        {
          amount: 3,
          unit: "",
          name: "plum tomatoes",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 4,
          unit: "cup",
          name: "chicken broth",
          consistency: "",
          meta: "",
        },
        {
          amount: 2,
          unit: "",
          name: "chicken breasts",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 2,
          unit: "",
          name: "potatoes",
          consistency: "",
          meta: "",
        },
        {
          amount: 1,
          unit: "pinch",
          name: "garlic powder",
          consistency: "",
          meta: "",
        },
        {
          amount: null,
          unit: "",
          name: "black pepper",
          consistency: "",
          meta: "to taste",
        },
      ],
      preparation: [
        {
          step: 1,
          description:
            "Sauté the olive oil, garlic, and onion over medium heat in a large nonstick stockpot.",
          stepImage: "https://i.imgur.com/mVgiec0.png",
        },
        {
          step: 2,
          description:
            "Add the celery and fennel and sauté briefly, then add the tomatoes.",
          stepImage: "https://i.imgur.com/J6UU6Yw.png",
        },
        {
          step: 3,
          description:
            "Add the broth, chicken, potatoes, and seasonings. Cook at a simmer over medium heat until the chicken is done and the potatoes are tender, about 20-25 minutes.",
          stepImage: "https://i.imgur.com/7QIhXPs.png",
        },
      ],
      filters: {
        healthy: false,
        seasonal: false,
        min30: false,
        glutenFree: false,
        vegetarian: false,
        breakfast: false,
        lunch: false,
        dinner: true,
        dessert: false,
        snack: false,
        indian: false,
        thai: false,
        japanese: false,
        french: false,
        italian: false,
        mexican: false,
        american: true,
        canadian: false,
        korean: false,
        polish: false,
      },
      comments: [
        {
          commentAuthor: "Dan Dalgatov",
          commentDetails: "This dish is perfect for a hungry developer",
          commentTime: "1592459790537",
        },
      ],
    },
    {
      title: "Chicken Parm",
      coverImage: "https://imgur.com/3znSL1M",
      servesPeople: 4,
      cookTime: 1,
      cookTimeUnit: "Hour",
      ingredients: [
        {
          amount: 1,
          unit: "tsp",
          name: "olive oil",
          consistency: "",
          meta: "for frying",
        },
        {
          amount: 3,
          unit: "clove",
          name: "garlic",
          consistency: "minced",
          meta: "",
        },
        {
          amount: 0.5,
          unit: "cup",
          name: "onions",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 2,
          unit: "tbs",
          name: "flour",
          consistency: "",
          meta: "",
        },
        {
          amount: 0.25,
          unit: "cup",
          name: "mozzarella cheese",
          consistency: "small cubes",
          meta: "",
        },
        {
          amount: 0.25,
          unit: "cup",
          name: "Fresh Basil",
          consistency: "chopped",
          meta: "",
        },
        {
          amount: 0.5,
          unit: "cup",
          name: "provolone cheese",
          consistency: "grated",
          meta: "",
        },

        {
          amount: 0.5,
          unit: "cup",
          name: "tomato sauce",
          consistency: "",
          meta: "",
        },
        {
          amount: 4,
          unit: "",
          name: "chicken breasts",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 2,
          unit: "",
          name: "eggs",
          consistency: "",
          meta: "",
        },
        {
          amount: 1,
          unit: "cup",
          name: "panko",
          consistency: "",
          meta: "",
        },
        {
          amount: 1,
          unit: "pinch",
          name: "salt",
          consistency: "",
          meta: "",
        },
        {
          amount: null,
          unit: "",
          name: "black pepper",
          consistency: "",
          meta: "to taste",
        },
      ],
      preparation: [
        {
          step: 1,
          description:
            "Preheat an oven to 450 degrees F (230 degrees C). Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper. Beat eggs in a shallow bowl and set aside.",
          stepImage: "https://imgur.com/mVgiec0",
        },
        {
          step: 2,
          description:
            "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside. Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides. Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.",
          stepImage: "https://imgur.com/J6UU6Yw",
        },
        {
          step: 3,
          description:
            "Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven. Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil. Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
          stepImage: "https://imgur.com/7QIhXPs",
        },
      ],
      filters: {
        healthy: false,
        seasonal: false,
        min30: false,
        glutenFree: false,
        vegetarian: false,
        breakfast: false,
        lunch: false,
        dinner: false,
        dessert: false,
        snack: false,
        indian: false,
        thai: false,
        japanese: false,
        french: false,
        italian: true,
        mexican: false,
        american: false,
        canadian: false,
        korean: false,
        polish: false,
      },
      comments: [
        {
          commentAuthor: "Dan Dalgatov",
          commentDetails: "This dish is perfect for a hungry developer",
          commentTime: "1592459790537",
        },
      ],
    },
    {
      title: "Rice",
      coverImage: "https://i.imgur.com/3znSL1M.png",
      servesPeople: 4,
      cookTime: 1,
      cookTimeUnit: "Hour",
      ingredients: [
        {
          amount: 1,
          unit: "tsp",
          name: "olive oil",
          consistency: "",
          meta: "",
        },
        {
          amount: 3,
          unit: "clove",
          name: "garlic",
          consistency: "minced",
          meta: "",
        },
        {
          amount: 0.5,
          unit: "cup",
          name: "onions",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 1,
          unit: "cup",
          name: "celery",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 1,
          unit: "tsp",
          name: "fennel seeds",
          consistency: "ground",
          meta: "",
        },
        {
          amount: 3,
          unit: "",
          name: "plum tomatoes",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 4,
          unit: "cup",
          name: "chicken broth",
          consistency: "",
          meta: "",
        },
        {
          amount: 2,
          unit: "",
          name: "chicken breasts",
          consistency: "diced",
          meta: "",
        },
        {
          amount: 2,
          unit: "",
          name: "potatoes",
          consistency: "",
          meta: "",
        },
        {
          amount: 1,
          unit: "pinch",
          name: "garlic powder",
          consistency: "",
          meta: "",
        },
        {
          amount: null,
          unit: "",
          name: "black pepper",
          consistency: "",
          meta: "to taste",
        },
      ],
      preparation: [
        {
          step: 1,
          description:
            "Sauté the olive oil, garlic, and onion over medium heat in a large nonstick stockpot.",
          stepImage: "https://i.imgur.com/mVgiec0.png",
        },
        {
          step: 2,
          description:
            "Add the celery and fennel and sauté briefly, then add the tomatoes.",
          stepImage: "https://i.imgur.com/J6UU6Yw.png",
        },
        {
          step: 3,
          description:
            "Add the broth, chicken, potatoes, and seasonings. Cook at a simmer over medium heat until the chicken is done and the potatoes are tender, about 20-25 minutes.",
          stepImage: "https://i.imgur.com/7QIhXPs.png",
        },
      ],
      filters: {
        healthy: true,
        seasonal: false,
        min30: false,
        glutenFree: false,
        vegetarian: false,
        breakfast: false,
        lunch: true,
        dinner: false,
        dessert: false,
        snack: false,
        indian: false,
        thai: false,
        japanese: false,
        french: false,
        italian: false,
        mexican: false,
        american: false,
        canadian: false,
        korean: false,
        polish: false,
      },
      comments: [
        {
          commentAuthor: "Dan Dalgatov",
          commentDetails: "This dish is perfect for a hungry developer",
          commentTime: "1592459790537",
        },
      ],
    },
  ];
  await Recipe.insertMany(recipes);
  console.log("Created recipes!");
};
const run = async () => {
  await main();
  db.close();
};
run();
