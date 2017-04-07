# week-7-LMAO

[![Build Status](https://travis-ci.org/FAC10/week-7-LMAO.svg?branch=master)](https://travis-ci.org/FAC10/week-7-LMAO)
[![codecov](https://codecov.io/gh/FAC10/week-7-LMAO/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC10/week-7-LMAO)

# Founders and Coders, LMAO Jokes

Live site: [Herokuapp.com/](http://lmao-jokes.herokuapp.com/)

Scroll to the bottom of the README for installation instructions, if you would like to run our project locally!

### User Story

As a member of Founders & Coders, I would like to securely access a site to share my funny jokes.

Thus, I should be able to:
* add my blog to a database where it will stored
* be able to log in if I have my username and password in the database
* see all jokes on the site
* be automatically logged in via a cookie once I've logged in once

### Requirements

- [ ] Ability to log in
- [ ] Ability to log out
- [ ] Account authentication against Heroku database of users with passwords
- [ ] Session cookie to be dropped on the user once they've succesfully logged in

### Stretch goals:

- [ ] Ability for new users to register for an account
- [ ] Password encryption
- [ ] Script injection prevention

## Architecture & Planning

 - See [here](https://cloud.githubusercontent.com/assets/15314681/24713610/1aadf580-1a1e-11e7-8f7e-4ce3e71239b8.png) for our architecture diagram

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

  - `git clone https://github.com/FAC10/week-7-LMAO`

 - Run `npm install` to install all dependencies

#### Database (To run the database locally)

 - Create a `config.env` file in the root of the project

 - Add the `DATABASE_URL` variable: DATABASE_URL = postgres://{usernameHereWithoutCurlys}@localhost:5432/lmao_jokes

#### Run locally

 - Run `npm run startDev` to start the server using Nodemon (which will automatically restart Node when changes are detected in your files). 

 - Navigate to http://localhost:4000/ in your browser

#### Tests

 - Run `npm run test` to run the tests *(this will take around 30 secs to complete)*

 - Run `npm run coverage` to check coverage *(this will take around 30 secs to complete)*
