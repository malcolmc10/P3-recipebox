# PROJECT 3 PLANNING WORKSHEET README TEMPLATE <!-- omit in toc -->

> The Project Planning section **should be completed** before you complete this project to ensure your team is aligned as you kick off. We recommend that you use Trello or Github Projects to create a project plan and assign tasks to each member of the team.

## Overview

**P3-recipebox**

This is a food recipe app that allows the user to select popular dishes and follow a step by step guide to making a delicious meal.


### Team Members

- [Nikita](https://github.com/nsavelevjs)
- [Peter](https://github.com/PolarBear97)
- [Colin](https://github.com/malcolmc10) (Team Lead)
- [Charaf](https://github.com/charafboulafaa) 
- [Dan](https://github.com/dandalgatov)

### Team Expectations
>  Review and update the original Group Expectations document that you created for the Blog App Exercise and link to it here.
Team values and expectations can be found on our project's [Group Expectation Setting Document](https://git.generalassemb.ly/sei-nyc-neptune/ux-sei-collab-p3/blob/master/group-expectations.md).

- Nikita - Weds: needs to go to appointment, gf's birthday.
- Dan - Fri: possibly a few hours off. 
- Peter - Sat: not available after 6.
- Colin - I try not to look at phone after 9:30pm. willing to though. Sunday from 2-4 daddy time.
- Charaf - Saturday morning doc appointment.

<br>

## Sprint 1


_Recipe Box sprint one should include basic filtering functionality, comments, and recipe detail rendering._

<br>

### Goals

- _Put in time on weekend to finish on time,_
- _Get MVP done,_
- _Work effectively as a team_
- _Add additional functionality for general world usability_

<br>

### Client (Front End)

#### Wireframes

> https://whimsical.com/ReqgME8gdNnxjGjc2uBbaJ#2Ux7TurymMsHjScerueX


#### Component Hierarchy

> https://whimsical.com/ReqgME8gdNnxjGjc2uBbaJ#2Ux7TurymMsHjScerueX

<br>

### Server (Back End)

#### Database Schema 

```
{
    title: { type: String, required: true },
    coverImage: { type: String, required: false },
    servesPeople: { type: Number, required: false },
    cookTime: { type: Number, required: false },
    cookTimeUnit: { type: String, required: false },
    score: { type: Number, required: false },
    ingredients: [
      {
        amountNum: { type: Number, required: false },
        amountDen: { type: Number,required: false },
        unit: { type: String, required: false },
        name: { type: String, required: true },
        consistency: { type: String, required: false },
        meta: { type: String, required: false },
      },
    ],
    preparation: [
      {
        step: { type: Number, required: true },
        description: { type: String, required: true },
        stepImage: { type: String, required: false },
      },
    ],
    filters: {
      healthy: { type: Boolean, required: false },
      seasonal: { type: Boolean, required: false },
      min30: { type: Boolean, required: false },
      glutenFree: { type: Boolean, required: false },
      vegetarian: { type: Boolean, required: false },
      breakfast: { type: Boolean, required: false },
      lunch: { type: Boolean, required: false },
      dinner: { type: Boolean, required: false },
      dessert: { type: Boolean, required: false },
      snack: { type: Boolean, required: false },
      indian: { type: Boolean, required: false },
      thai: { type: Boolean, required: false },
      japanese: { type: Boolean, required: false },
      french: { type: Boolean, required: false },
      italian: { type: Boolean, required: false },
      mexican: { type: Boolean, required: false },
      american: { type: Boolean, required: false },
      canadian: { type: Boolean, required: false },
      korean: { type: Boolean, required: false },
      polish: { type: Boolean, required: false },
    },
    comments: [
      {
        commentAuthor: { type: String, required: true },
        commentDetails: { type: String, required: true },
        commentTime: { type: String, required: true },
      },
    ],
    tags:{ type: Array, required: false }
  }
```

#### Express Routes

``` 
//* Search
router.get("/recipes/filter", control.filter)

//* Recipes
router.get("/recipes", control.getRecipes)
router.get("/recipes/:id", control.getRecipe)

router.post("/recipes", control.createRecipe)
router.put("/recipes/:id", control.updateRecipe)
router.delete("/recipes/:id", control.deleteRecipe)

//* Comments
router.get("/recipes/:recipeId/comments", control.getComment)
router.post("/recipes/:id/comments", control.addComment)
router.put("/recipes/:recipeId/comments/:id", control.updateComment)
router.delete("/recipes/:recipeId/comments/:id", control.deleteComment)
```

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies and their role in the project.

|    Library     | Description                                |
| :------------: | :----------------------------------------- |
|     React      | _Building user interface._ |
|  React Router  | _Collection of navigational components._ |
|    Express     | _Minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications._ |
| Express Router | _Define routing using methods of the Express app._ |
|    Cors    | _Connect Express middleware._ |
|    Mongoose    | _MongoDB wrapper._ |
|    Morgan    | _Keeps track of backend requests._ |
|    Body Parser    | _Formats data for JSON_ |
|    Nodemon    | _Developement server._ |
|    Tailwind    | _CSS library._ |
|    Axios    | _Sends API calls._ |
|    Fontawesome    | _Imports svg icons._ |
|    Jest  | _Allows for testing._ |
|    Query String  | _Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly._ |
|    Underscore  | _A suite of 100+ specialized functions/_ |

<br>

***

## Plan Your Next Sprint

1. Updating schema to separate comments, recipes, and users.
2. Allow comment reply. 
3. Adding more recipes.
4. Creating Add Recipe page. 
5. Update search functionality. 
6. Update layout. 
7. Add authentication. 
8. Continuous deployement. 

***

## Code Issues & Resolutions

1. get search functionality. 

***


