## CS3219 Assignment Task B1

[![Build Status](https://travis-ci.com/raniceyue/cs3219-b.svg?branch=master)](https://travis-ci.com/raniceyue/cs3219-b)

This folder contains the backend of the application i.e. the API server. The backend of this application is written in Javascript using Express.js for the API server.

### Initializing API on localhost

1. `cd` to `/backend`
2. Run `npm install` to install the necessary node modules
3. Run `npm start` to initalize server on port `8000`

### Schema (`/api/model.js`)

| Property | Type | Description |
|----------|------|-------------|
| `name`   | `string` | Name of the action figure, e.g. Hatsune Miku v4 1/4 Scale Statue |
| `price`  | `Number` | Cost price of the action figure |
| `brand`  | `string` | Brand of the figure, e.g. Goodsmile Company, Kotobukiya, etc. |
| `toSell` | `Boolean` | A boolean that determines if the figure is marked for sale or not | 

### API Calls (`/api/controller` & `/api/routes`)

To test the API calls, the following HTTP Requests can be made at their respective endpoints both locally and on the remote insance of the backend.

| HTTP Request | Endpoint | Params | Description |
|--------------|----------|--------|-------------|
| `GET`        | `/api/figures` | N/A | Gets all figures | 
| `GET`        | `/api/figures/:id` | N/A | Gets a figure with ID `:id` |
| `POST`       | `/api/figures` | Requires all the following parameters: <br> - `name : string` <br> - `price: Number` <br> - `brand: string` <br> - `toSell : Boolean` | Creates a figure with the specified parameters |
| `PUT`        | `/api/figures/:id` | At least 1 of the params specified  above | Updates a figure | 
| `DELETE`     | `/api/figures/:id` | N/A | Deletes figure with ID `:id` | 

### Examples

**Locally** - Making a `GET` request to `http://localhost:8000/api/figures` after running the node server locally, will return all figures in the database 

**Remotely** - Making a `GET` request to `http://cs3219-assignment-b.et.r.appspot.com/api/figures` via postman, will return all figures in the database

## Testing 

### Locally
To conduct local tests on the backend, first ensure you are in the directory `/backend` of this repo, then run `npm test`. 

The tests cover only 4 API calls i.e. `GET`, `POST`, `PUT` and `DELETE`. After testing, all entities created by the tests are automatically flushed from the database. 

### Remotely
Testing for the remote instance of the backend is automated via Travis CI/CD.