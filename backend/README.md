## CS3219 Assignment Task B1

[![Build Status](https://travis-ci.com/raniceyue/cs3219-b.svg?branch=master)](https://travis-ci.com/raniceyue/cs3219-b)

For this assignment I have created a simple web application to manage an action figure collection. 

### Initializing API on localhost

1. cd to `cs3219-b/backend`
2. Run `npm install` to install node modules
3. Run `npm start` to initalize server on port `8000`

### Schema

| Property | Type | Description |
|----------|------|-------------|
| `name`   | `string` | Name of the action figure, e.g. Hatsune Miku v4 1/4 Scale Statue |
| `price`  | `Number` | Cost price of the action figure |
| `brand`  | `string` | Brand of the figure, e.g. Goodsmile Company, Kotobukiya, etc. |
| `toSell` | `Boolean` | A boolean that determines if the figure is marked for sale or not | 

### API Calls

| HTTP Request | Endpoint | Params | Description |
|--------------|----------|--------|-------------|
| `GET`        | `/api/figures` | N/A | Gets all figures | 
| `GET`        | `/api/figures/:id` | N/A | Gets a figure with ID `:id` |
| `POST`       | `/api/figures` | Requires all the following parameters: <br> - `name : string` <br> - `price: Number` <br> - `brand: string` <br> - `toSell : Boolean` | Creates a figure with the specified parameters |
| `PUT`        | `/api/figures/:id` | At least 1 of the params specified  above | Updates a figure | 
| `DELETE`     | `/api/figures/:id` | N/A | Deletes figure with ID `:id` | 

### Testing on Deployed 

This node server has been deployed using Google App Engine at [this link](https://cs3219-assignment-b-backend.et.r.appspot.com/).