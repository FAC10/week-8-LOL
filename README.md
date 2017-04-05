# week-7-LMAO

[![Travis-Badge-Build]
[![Code Coverage]

# Founders and Coders, Interesting Companies App

Live site: [Herokuapp.com/]()

Scroll to the bottom of the README for installation instructions, if you would like to run our project locally!

### User Story

As a member of Founders & Coders, I would like to securely access a site to share my interesting blogs.

Thus, I should be able to:
* add my blog to a database where it will stored, including my name and blog itself.
* have my password securely encrypted

### Requirements

- [ ]

### Strech goals:

- [ ]

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

#### Database

 - Create a `config.env` file in the root of the project

 - Add the `DB_URL` variable

#### Run locally

 - Run `npm run devStart` to start the server using Nodemon (which will automatically restart Node when changes are detected in your files)

 - Navigate to http://localhost:4000/ in your browser

#### Tests

 - Run `npm run test` to run the tests *(this will take around 30 secs to complete)*

 - Run `npm run coverage` to check coverage *(this will take around 30 secs to complete)*
