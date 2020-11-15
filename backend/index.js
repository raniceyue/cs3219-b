// Entry point of node server

let express = require("express");
let routes = require("./api/routes")
let mongoose = require('mongoose');
let cors = require("cors");
let bodyParser = require('body-parser');

require('dotenv').config()

const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

if (!db) {
	console.log("Error connecting to db");
} else { 
	console.log("Db connected succesfully");
}


app.get("/", (request, response) => response.send("WASSUP"));

app.use('/api', routes);

app.listen(port, () => {
	console.log("Server running on port " + port);
});

module.exports = app;

