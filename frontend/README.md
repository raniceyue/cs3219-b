# CS3219 Assignment Task B3

This folder contains the frontend of this application, which is build using React and styled using Material-UI.

## Running Locally

The frontend of this application can be run locally by cloning this repo, navigating to this directory (`/backend`), and running `npm start`. 

**In order for any data to be shown on the frontend, the backend should be run locally simultanously.**

The webpage hosting this application will be hosted at `http://localhost:3000`

The API can be consumed on the frontend by using the features on the application. 

## Accessing Remote

The remote instance of this application can be accessed [at this link](https://cs3219-assignment-b-frontend.et.r.appspot.com/)

The API can be consumed on the frontend by using the features on the application. 

## Features

### Adding a figure
To add a figure, specify figure details in the form on the right side of the webpage, and submit to add the figure to the database. The page will automatically be refreshed upon adding the figure, and the figure will be reflected in the gallery of cards on the left. 

### Deleting a figure
To delete a figure, click on the menu icon on the top right of the figure's card. A menu will drop down with the option `Delete`. Upon clicking the option, the page will be refreshed and the figure you have chosen to delete will no longer be shown on the gallery as it has been removed from the database. 

### Editing a figure

There are 2 ways to edit a figure, 1) Marking a figure for sale 2) Editing the figure directly. 

#### Marking a figure for sale

To mark figure (that is not already marked for sale) for sale, click the menu icon on the top right of the figure's card. A menu will drop down with the option `Mark For Sale`. Upon clicking the option, the page will be refreshed and the changes will be reflected on the webpage.

#### Editing figures directly

To edit a figure, click the menu icon on the top right of the figure's card. A menu will drop with the option `Edit Figure`. Upon clicking the option, a dialog will pop up including a form pre-filled with the original metadata of the figure, which you can then edit. After you have finished editing, click submit and the page will be refreshed and the changes will be reflected on the webpage.