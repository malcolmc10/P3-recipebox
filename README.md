# P3-recipebox
This is a food recipe app that allows the user to select popular dishes and follow a step by step guide to making a delicious meal.

<p align="center">
  <img src="https://www.monkeyuser.com/assets/images/2017/67-merging-branches.png" width="50%"/>
</p>

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# P3: Full-Stack App Development

## Task

You will be part of a team that will be building an app based on designs provided by the UX team.

## GitHub Setup

This will be very similar to what we did in our morning [Group-Git-Lesson](https://git.generalassemb.ly/sei-nyc-neptune/Git-Group-Lesson) exercise. The only difference is the addition of a `develop` branch for additional safety.

1. Have the Team Lead make a new repo in their **personal Github account.** 
1. Add a `develop` branch on the remote repository: 
    ![](/assets/add-branch.png)
1. Now that you have a remote `develop` branch let's go ahead and set it as the **default** branch of our repository. 
1. Your default branch is named `master`. If you have admin rights over a repository on GitHub, you can change the default branch on the repository. [Setting the default branch](https://help.github.com/en/github/administering-a-repository/setting-the-default-branch)
1. In Settings, in the left menu, click Branches.
1. Update the `develop` to be the default branch.

    ![](/assets/dev-default.png)
1. Create branch protection rules like we did in our morning exercise: 
    - Click on settings and then branches
    - Add rule to dev branch
    - Check Require pull request reviews before merging
    - Check Require view from Code Owners
    - Save Changes

    ![](/assets/add-rules.png)

    >This will make it so the team lead has to review all changes and no one can accidentally push directly to master.

1. Share the link for your new repo with your teammates in Slack.
1. In GitHub, click on the **Settings** tab, and then navigate to **Collaborators & Teams**.
1. Add your teammates as collaborators. You will need their **personal** GitHub usernames.

    ![](/assets/add-collaborator1.png)
1. Your team members should have received an invitation to collaborate via email.
1. All other members should **clone** the new repo. **Do not fork!**

At this point, all members should be able to make their own branches. A few things to keep in mind:
  - When you go to push your code to the remote, remember to use the command `git push origin your-branch-name`.
  - When you are ready to make a pull request, double check that your head is set correctly. You should be making the PR on the `develop` branch in your team lead's repo.
  - The team lead should now handle pull requests as outlined in [Group-Git-Lesson](https://git.generalassemb.ly/sei-nyc-neptune/Git-Group-Lesson), but make sure they are all going to `develop`, **NOT** `master`. 

Once a feature is ready, the team lead can merge `develop` into `master`.
  
  1. `git checkout master`
  1. `git pull origin develop`
  1. `git merge develop`
  1. `git push origin master`


## Project Requirements (Sprint 1)

**Your project must:**

- Have a proportionate level of git commits from each team member (git commit regularly)
- Have the frontend deployed on [Surge](https://gist.github.com/brunopgalvao/0d8fcaabe8f1a6d862397160d933e3f6) or [Netlify](https://www.netlify.com/)
- Have the backend deployed on [Heroku](https://www.heroku.com)
- Deploy MongoDB database to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Include CRUD on the backend using Express, Mongoose, and MongoDB
- Use flexbox and/or css grid
- Use React Router
- Look like your mockup (or better)
- Be properly indented and spaced
- Not include commented out code in the `master` branch
- Use camelCase for javascript code
- Include a *beautiful*, professional **README.md** (use [markdown](https://guides.github.com/features/mastering-markdown/))

## **Project Due Date:** Friday: 6/26/20

### Tips

- Designate a team lead that is responsible for keeping the project organized.
- Use [GitHub Projects](https://github.com/features/project-management) to create tasks for each team member
- Deploy early (day one or two) and often (everytime you implement a new feature)
- Implement **all** project requirements first before moving on to post-mvp features
- Use high resolution images (do not skew images when resizing, resize proportionately)
- Make it look professional (this is for you to showcase - it could land you a job)
