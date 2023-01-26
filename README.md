# The_Spectacular_Tech_Blog

Deployed Link: https://the-spectacular-tech-blog.herokuapp.com/


## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [User Story](#user-story)
  * [Acceptance Criteria](#user-story)
  * [Installation](#installation)
  * [Setup](#setup)
  * [Usage](#usage)
  * [Screenshots](#screenshots)
  * [Questions?](#questions)


## License
  Read more about MIT here:
  [MIT](https://opensource.org/licenses/MIT)


## Description
  A CMS-style blog site  where developers can publish and comment on posts using Express, Handlebars, Sequelize &amp; Express.


## User Story
    AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions


## Acceptance Criteria 
    GIVEN a CMS-style blog site
    WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
    WHEN I click on the homepage option
    THEN I am taken to the homepage
    WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in
    WHEN I choose to sign up
    THEN I am prompted to create a username and password
    WHEN I click on the sign-up button
    THEN my user credentials are saved and I am logged into the site
    WHEN I revisit the site at a later time and choose to sign in
    THEN I am prompted to enter my username and password
    WHEN I am signed in to the site
    THEN I see navigation links for the homepage, the dashboard, and the option to log out
    WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
    WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard
    WHEN I click on the logout option in the navigation
    THEN I am signed out of the site
    WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## Installation
  1. To install application, clone the main project via the HTTP or SSH link on github.

```
git clone
```

2. Once cloned, open up the project folder in your text editor and run the following command in terminal to install all dependencies.

```
npm install
```


## Setup
Create an '.env' file in the main directory path and include the following data:

```
DB_NAME='developing_tech_db'
DB_USER='root'
DB_PASSWORD=''
```

Once your '.env' has been created with the corresponding data, open up the schema ('db/schema.sql') and update the database label to match with the database you included in your '.env' file.


## Usage
  1. Run `node index.js` in terminal to start. 
  2. Follow through the prompts as required. 
  OR
  Access the website through the deployed link.


## Screenshots
Home Page
![Screenshot_20230126_014443](https://user-images.githubusercontent.com/112667543/214782633-40d829d6-56d6-4af4-8c23-77e4ebc7a2af.png)

Login Page
![Screenshot_20230126_014459](https://user-images.githubusercontent.com/112667543/214782653-e9c79736-4d69-43f6-829a-0f2780871da3.png)

Signup Page
![Screenshot_20230126_014506](https://user-images.githubusercontent.com/112667543/214782680-6e897b11-8a48-4d1c-897b-7c6431f305ad.png)

Dashboard
![Screenshot_20230126_014526](https://user-images.githubusercontent.com/112667543/214782696-e8d76ce9-b91c-46da-8b99-f2119134b057.png)

Editing/Deleting Post
![Screenshot_20230126_014533](https://user-images.githubusercontent.com/112667543/214782701-ee186be3-8185-442c-a2de-ce2c037bd030.png)

Creating a new post
![Screenshot_20230126_014543](https://user-images.githubusercontent.com/112667543/214782706-c1ed49cb-5142-417d-9b26-91bf33e0563a.png)

Viewing/Adding Comments
![Screenshot_20230126_014554](https://user-images.githubusercontent.com/112667543/214782722-39993320-4443-442e-92a5-18074f755546.png)

## Questions
  For any questions, contact me at :
    Github: https://github.com/adinair007
    [Email: adinair.in@outlook.com](mailto:adinair.in@outlook.com)

