// Import required packages
var express = require('express');

// Express config
var PORT = process.env.PORT || 8080;
var app = express();

// Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Application listening on localhost:"+ PORT);
});
