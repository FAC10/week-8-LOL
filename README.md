# week-8-LOL

[![Build Status](https://travis-ci.org/FAC10/week-8-LOL.svg?branch=master)](https://travis-ci.org/FAC10/week-8-LOL)
[![codecov](https://codecov.io/gh/FAC10/week-8-LOL/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC10/week-8-LOL)

# Founders and Coders, LOL Jokes

Live site: [Herokuapp.com/](***)

Scroll to the bottom of the README for installation instructions, if you would like to run our project locally!

### User Story

As a member of Founders and Coders, who wants to learn from my fellow devs

[ ] I want to log in with my Github account
So that I can use my Github organisation's info to see posts from my fellow students.
Acceptance criteria:

[ ] I can click on a button, which allows me to log in via my Github account
[ ] The look of the button should make it obvious that it is this form of login
[ ] Once I'm logged in, I should see a list of blog posts
[ ] I shouldn't be left with a blank loading screen for too long during the authorisation process, otherwise I will lose confidence in your website and leave.
[ ] As any user who is logged in
I want to see my username & Github profile picture on the homepage
So that I benefit from logging in with Github OAuth, and don't have to do any profile setup on your site.
Acceptance criteria:
[ ] I can see my username & profile picture on each page that I visit

### Stretch goals:

As a paranoid member of the current cohort, who believes in "what happens at FAC stays at FAC"

[ ] I want others' viewing rights to my posts to be restricted
So that I feel free to be wildly opinionated with my crazy blogging.
Acceptance criteria:
[ ] Only logged-in members of Founders and Coders can see any of the content on this site
[ ] Anyone who is logged in, but not part of the current cohort, should still see a list of blogs. But they should see nothing that I (the paranoid user) have posted.
[ ] As the author of my own posts (any authenticated user)
I want to be able to edit the posts that I have written (only my own)
So that I can retain editorial control & make sure my online content is the best it can be.

### Acceptance criteria:

[ ] I can click on a button next to any of my posts, which takes me to an edit view
[ ] I can't see an edit button next to anyone else's posts
[ ] Each user has the same experience (but with their own posts)
[ ] Clicking "done" / "submit" changes the content for every user to see
[ ] Clicking "done" / "submit" takes me to a view of the new, edited version of my blog post

## Architecture & Planning

 - See [here](***) for our architecture diagram

## Schema diagrams

Here are the schema diagrams for the database:

### Blogs: 1 to 1
Column | Type | Modifiers
--- | --- | ---
id | integer | not null default
body | character varying (600) | not null
author_id | interger | not null

### Authors: 1 to Many

Column | Type | Modifiers
--- | --- | ---
id | integer | not null default
username | character varying(100) | not null
password | character varying(100) | not null

## Installation instructions

 - Clone this repo and cd into it

  - `git clone ***`

 - Run `npm install` to install all dependencies

#### Database (To run the database locally)

 - Create a `config.env` file in the root of the project

 - Add the `DATABASE_URL` variable: DATABASE_URL = ***

#### Run locally

 - Run `npm run startDev` to start the server using Nodemon (which will automatically restart Node when changes are detected in your files).

 - Navigate to https://localhost:3000/ in your browser

#### Tests

 - Run `npm run test` to run the tests *(this will take around 30 secs to complete)*

 - Run `npm run coverage` to check coverage *(this will take around 30 secs to complete)*
