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

> Sprint 1 should result in a well-planned and easily-communicated project, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

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
            amount: { type: Number, required: false },
            unit: { type: String, required: false },
            name: { type: String, required: true },
            consistency: { type: String, required: false },
            meta: { type: String, required: false }
        }
    ],
    preparation: [
        {
            step: { type: Number, required: true },
            description: { type: String, required: true },
            stepImage: { type: String, required: false }
        }
    ],
    filters: [
        {
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
            polish: { type: Boolean, required: false }
        }
    ],
    comments: [
        {
            commentAuthor: { type: String, required: true },
            commentDetails: { type: String, required: true },
            commentTime: { type: Number, required: true }
        }
    ]
}
```

#### Express Routes

``` 
router.get("/recipes", control.getRecipes);
router.get("/recipes/:id", control.getRecipe);
router.post("/recipes", control.createRecipe);
router.put("/recipes/:id", control.updateRecipe);
router.delete("/recipes/:id", control.deleteRecipe)
```

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies and their role in the project.

|    Library     | Description                                |
| :------------: | :----------------------------------------- |
|     React      | _Lorem ipsum dolor sit amet, consectetur._ |
|  React Router  | _Lorem ipsum dolor sit amet, consectetur._ |
|    Express     | _Lorem ipsum dolor sit amet, consectetur._ |
| Express Router | _Lorem ipsum dolor sit amet, consectetur._ |
|    Cors    | _Lorem ipsum dolor sit amet, consectetur._ |
|    Mongoose    | _Lorem ipsum dolor sit amet, consectetur._ |
|    Morgan    | _Lorem ipsum dolor sit amet, consectetur._ |
|    Body Parser    | _Lorem ipsum dolor sit amet, consectetur._ |
|    Nodemon    | _Lorem ipsum dolor sit amet, consectetur._ |
|    Tailwind    | _Lorem ipsum dolor sit amet, consectetur._ |
|    Axios    | _Lorem ipsum dolor sit amet, consectetur._ |



<br>

***

## Plan Your Next Sprint

> Use this section to document ideas you've had that would be fun (or necessary) for your next sprint. This will be helpful when you return to your project after graduation!

***

## Code Issues & Resolutions

> Use this section to document and keep track of all major issues encountered and their resolution, if you'd like.

***

## Change Log

> Use this section to document and keep track of any changes that need to be made to your planned Sprint and provide reasons.