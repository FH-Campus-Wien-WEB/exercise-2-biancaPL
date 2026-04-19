/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
   const movies = {
  tt001: {
    imdbID: "tt001",
    Title: "The Emperor's New Groove",
    Released: "2000-12-15",
    Runtime: 78,
    Genres: ["Animation", "Adventure", "Comedy"],
    Directors: ["Mark Dindal"],
    Writers: ["David Reynolds", "Chris Williams", "Mark Dindal"],
    Actors: ["David Spade", "John Goodman", "Eartha Kitt"],
    Plot: "Emperor Kuzco is turned into a llama by his ex-administrator Yzma and must regain his throne and human form with the help of Pacha.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjM2MWU5ZDEtNDZlZC00ZmQ2LThiOTEtMmZkMzAxMmI5MGIyXkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 70,
    imdbRating: 7.4
  },

  tt002: {
    imdbID: "tt002",
    Title: "Despicable Me",
    Released: "2010-07-09",
    Runtime: 95,
    Genres: ["Animation", "Adventure", "Comedy"],
    Directors: ["Pierre Coffin", "Chris Renaud"],
    Writers: ["Cinco Paul", "Ken Daurio", "Sergio Pablos"],
    Actors: ["Steve Carell", "Jason Segel", "Russell Brand"],
    Plot: "Gru, a criminal mastermind, adopts three orphan girls as pawns for a big heist. His life changes when they start seeing him as a father figure.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg",
    Metascore: 72,
    imdbRating: 7.6
  },

  tt003: {
    imdbID: "tt003",
    Title: "Interstellar",
    Released: "2014-11-07",
    Runtime: 169,
    Genres: ["Adventure", "Drama", "Sci-Fi"],
    Directors: ["Christopher Nolan"],
    Writers: ["Jonathan Nolan", "Christopher Nolan"],
    Actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 74,
    imdbRating: 8.7
  }
};

module.exports = movies;
