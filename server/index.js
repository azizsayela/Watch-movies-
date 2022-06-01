const express = require("express");
const axios = require("axios");
const Films = require("../database-mongodb/Movie_Schema");
const { findByIdAndDelete } = require("../database-mongodb/Movie_Schema");
const User = require("../database-mongodb/UserSchema");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));

let getFilmsFromApi = () => {
  let options = {
    url: `https://imdb-api.com/en/API/MostPopularMovies/k_egr8pg8k`,
    headers: {
      "User-Agent": "request",
    },
  };
  return axios.get(options.url, {
    options,
  });
};
//First get request to get all films from iMDB api
// app.get("/api/films", function (req, res) {
//   getFilmsFromApi().then((result) => {
//     console.log(result.data.items);
//     res.json(result.data.items);
//   });
// });
//GET all the films from the api filter the fields and push into our database
app.post("/api/films", function (req, res) {
  getFilmsFromApi()
    .then((result) => {
      let films = result.data.items.map((e) => {
        return {
          id: e.id,
          rank: e.rank,
          image: e.image,
          title: e.title,
          year: e.year,
          crew: e.crew,
          imDbRating: e.imDbRating,
        };
      });
      // ;
      return films;
    })

    .then((films) =>
      Films.insertMany(films).then(function () {
        console.log("Data inserted");
      })
    );
});

// get request to get all films from database
app.get("/api/films", function (req, res) {
  Films.find().then((result) => {
    res.status(200).json(result);
  });
});

//get one film by name
app.get("/api/onefilm", function (req, res) {
  Films.findOne({ title: req.body.title }).then((result) => {
    res.status(200).json(result);
  });
});

// add a film in the admin view
app.post("/api/films/create", function (req, res) {
  Films.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) res.status(400).send("failed");
    });
});

// update films info for admin view
app.put("/api/films/update/:_id", function (req, res) {
  Films.findByIdAndUpdate(req.params._id, req.body).then((result) => {
    res.status(200).json("data updated");
  });
});
// delete film for admin view
app.delete("/api/films/delete/:_id", function (req, res) {
  Films.findByIdAndDelete(req.params._id)
    .then((result) => {
      res.status(200).json({ message: "deleted", result });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
});

//add one user to the database
app.post("/api/films/sign-up", function (req, res) {
  User.create(req.body).then((result) => {
    res.status(200).json(result);
  });
});

//get a user object by the usernmae from database this will be used for checking
// app.get("/api/films/getuser", function (req, res) {
//   User.findOne({ username: req.body.username }).then((result) => {
//     res.status(200).json(result);
//   });
// });

app.post("/api/films/getuser", (req, res) => {
  let { password, username } = req.body;
  if (!password || !username) {
    return res.status(400).json({
      message: "Username or Password not present",
    });
  }
  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        res.status(200).json({
          message: "Login successful",
          user,
        });
      } else {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "An error occurred",
        error: err.message,
      });
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
