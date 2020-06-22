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
          amountNum: 1,
          amountDen:1,
          unit: "tsp",
          name: "olive oil",
          consistency: "",
          meta: "",
        },
        {
          amountNum: 3,
          amountDen:1,
          unit: "clove",
          name: "garlic",
          consistency: "minced",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:2,
          unit: "cup",
          name: "onions",
          consistency: "diced",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "cup",
          name: "celery",
          consistency: "diced",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "tsp",
          name: "fennel seeds",
          consistency: "ground",
          meta: "",
        },
        {
          amountNum: 3,
          amountDen:1,
          unit: "",
          name: "plum tomatoes",
          consistency: "diced",
          meta: "",
        },
        {
          amountNum: 4,
          amountDen:1,
          unit: "cup",
          name: "chicken broth",
          consistency: "",
          meta: "",
        },
        {
          amountNum: 2,
          amountDen:1,
          unit: "",
          name: "chicken breasts",
          consistency: "diced",
          meta: "",
        },
        {
          amountNum: 2,
          amountDen:1,
          unit: "",
          name: "potatoes",
          consistency: "",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "pinch",
          name: "garlic powder",
          consistency: "",
          meta: "",
        },
        {
          amountNum: null,
          amountDen:0,
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
          amountNum: 1,
          amountDen:1,
          unit: "tsp",
          name: "olive oil",
          consistency: "",
          meta: "for frying",
        },
        {
          amountNum: 3,
          amountDen:1,
          unit: "clove",
          name: "garlic",
          consistency: "minced",
          meta: "",
        },
        {
          amountNum: 0.5,
          amountDen:1,
          unit: "cup",
          name: "onions",
          consistency: "diced",
          meta: "",
        },
        {
          amountNum: 2,
          amountDen:1,
          unit: "tbs",
          name: "flour",
          consistency: "",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:4,
          unit: "cup",
          name: "mozzarella cheese",
          consistency: "small cubes",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:4,
          unit: "cup",
          name: "Fresh Basil",
          consistency: "chopped",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:2,
          unit: "cup",
          name: "provolone cheese",
          consistency: "grated",
          meta: "",
        },

        {
          amountNum: 1,
          amountDen:2,
          unit: "cup",
          name: "tomato sauce",
          consistency: "",
          meta: "",
        },
        {
          amountNum: 4,
          amountDen:1,
          unit: "",
          name: "chicken breasts",
          consistency: "diced",
          meta: "",
        },
        {
          amountNum: 2,
          amountDen:1,
          unit: "",
          name: "eggs",
          consistency: "",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "cup",
          name: "panko",
          consistency: "",
          meta: "",
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "pinch",
          name: "salt",
          consistency: "",
          meta: "",
        },
        {
          amountNum: null,
          amountDen:0,
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
            "Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven. Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amount of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil. Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
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
      title: "Spanish Rice",
      coverImage: "https://i.ibb.co/QjJsZrb/Screen-Shot-2020-06-21-at-4-10-05-PM.png",
      servesPeople: 2,
      cookTime: 40,
      cookTimeUnit: "Minutes",
      ingredients: [
        {
          amountNum: 2,
          amountDen:1,
          unit: "Tbsp",
          name: "olive oil",
          consistency: "",
          meta: ""
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "clove",
          name: "garlic",
          consistency: "minced",
          meta: ""
        },
        {
          amountNum: 1,
          amountDen:2,
          unit: "",
          name: "green bell pepper or 1 jalapeno",
          consistency: "seeded and finely diced",
          meta: ""
        },
        {
          amountNum: 2,
          amountDen:1,
          unit: "",
          name: "green onions or a handful of cilantro",
          consistency: "roughly chopped",
          meta: ""
        },
        {
          amountNum: 1.5,
          amountDen:1,
          unit: "cups",
          name: "Tomato sauce",
          consistency: "",
          meta: "(or canned diced tomatoes if you want chunky tomato pieces in the rice)"
        },
        {
          amountNum: 3,
          amountDen:1,
          unit: "cups",
          name: "chicken broth/stock",
          consistency: "",
          meta: ""
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "tsp",
          name: "salt",
          consistency: "",
          meta: "(or according to taste if the chicken broth is salty)"
        },
        {
          amountNum: 1,
          amountDen:3,
          unit: "tsp",
          name: "black pepper",
          consistency: "ground",
          meta: ""
        },
        {
          amountNum: 1,
          amountDen:1,
          unit: "tsp",
          name: "oregano",
          consistency: "dried",
          meta: ""
        }
      ],
      preparation: [
        {
          step: 1,
          description:
            "Heat 2 tbsp of olive oil in a deep pan, on medium-high heat. Add the minced garlic and sautee for a minute or two, until it’s soft. Toss in the diced green pepper/ jalapeno and sautee it together with the garlic. Before your garlic starts burning, add the rice and stir it well so that more or less each grain is coated in oil. Sautee the rice for a couple minutes stirring to make sure the rice doesn’t stick to the bottom of the pan.",
          stepImage: "https://i.ibb.co/YZkgWtG/Screen-Shot-2020-06-21-at-4-10-21-PM.png"
        },
        {
          step: 2,
          description:
            "Then add 1/2 cup of tomato sauce or diced tomatoes (according to your preference) and stir it all to coat the rice. Pour in the chicken stock/broth and stir picking up all the flavor from the bottom of the pan. Season the rice with salt, pepper and oregano. Stir gently and let the broth come to a boil on high heat.",
          stepImage: "https://i.ibb.co/g94B88d/Screen-Shot-2020-06-21-at-4-11-43-PM.png"
        },
        {
          step: 3,
          description:
            "As soon as the liquid starts bubbling, put a lid on and turn the heat down to a low simmer and let the rice cook for about 20 mins, until most of the liquid is absorbed and the rice is tender. Add the chopped green onion or cilantro and very gently stir it in, or simple fluff the rice up with some forks. Garnish with a little green onion on top.",
          stepImage: "https://i.ibb.co/fF2SbBL/Screen-Shot-2020-06-21-at-4-12-43-PM.png"
        },
      ],
      filters: {
        healthy: true,
        seasonal: false,
        min30: false,
        glutenFree: false,
        vegetarian: true,
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
        mexican: true,
        american: false,
        canadian: false,
        korean: false,
        polish: false
      },
      comments: [
        {
          commentAuthor: "Dan Dalgatov",
          commentDetails: "This dish is perfect for a hungry developer",
          commentTime: "1592459790537"
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
