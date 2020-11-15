# CS3219 Assignment Task B1-B4

[![Build Status](https://travis-ci.com/raniceyue/cs3219-b.svg?branch=master)](https://travis-ci.com/raniceyue/cs3219-b)

## Overview

This repo contains my submission for the Tasks B1-B4.

For this assignment I created a MERN stack application that helps to manage an action figure collection. 

This application's testing and deployment is fully automated via Travis CI/CD. The testing covers the basic CRUD HTTP requests i.e. `POST`, `GET`, `PUT`, `DELETE`, and the frontend and backend are deployed seperately via Google App Engine. 

### Disclaimer

Due to time constraints I had no time to configure any user authentication, therefore the application is just a general for-show application that anyone can interact with on the front end. All API calls made both locally and on the deployed instances interact with the same database i.e. there is no staging database for this application and any API calls made locally will be reflected on the deployed instances as well. 

## Accessing Deployed Application

### Backend

The backend of the application can be accessed [at this link](https://cs3219-assignment-b-backend.et.r.appspot.com/).

API calls can be made to this link via all IP addresses with no authentication needed. For more details on the available API calls and their parameters etc. pleae [reer to this write-up on the backend](/backend/README.md).

### Frontend

The frontend of the application can be accessed [at this link](https://cs3219-assignment-b-frontend.et.r.appspot.com/).

Consumption of the backend API can be tested by using the features on the application. For more details, please [refer to this write-up on the frontend](/frontend/README.md).

## Running Project Locally

In order to run this project locally, the backend and frontend of the project have to be run simultaneously. 

This can via the following steps, after cloning this repo
1. Ensure you are in the root folder of this repo
2. Run `npm install` to install the necessary dependencies
3. Run `npm start dev` and both the frontend and backend will run simultaneously. 

For more information on the implementation of the frontend and backend, please refer to these links. 
1. [Frontend](/backend/README.md)
2. [Backend](/frontend/README.md)

