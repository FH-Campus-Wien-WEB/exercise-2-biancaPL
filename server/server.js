const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');
console.log(movieModel);
const app = express();

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Parse urlencoded bodies
app.use(bodyParser.json()); 


// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and eturn the movies from 
     the model as an array */
  res.json(Object.values(movieModel));
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
  const movie = movieModel[req.params.imdbID];

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
});
/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */
app.put('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const existing = movieModel[id];
  const movie = req.body;

  // Poster behalten, falls nicht mitgeschickt
  if (existing && !movie.Poster) {
    movie.Poster = existing.Poster;
  }

  movieModel[id] = movie;

  if (existing) {
    res.sendStatus(200);
  } else {
    res.status(201).json(movie);
  }
});  

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

