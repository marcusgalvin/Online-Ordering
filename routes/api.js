const express = require("express");
const router = express.Router(); //method that creates a router object when you call it
const User = require("../models/User");

router.get("/", (req, res) => res.send("api route is working!"));

router.post("/", function(req, res) {
  //res.send sends info from server to browser (client)

  const userName = req.body.username; //type /api?username="marcus"
  const userId = req.body.userId;
  const message = req.body.message;
  const date = req.body.date;
  const name = req.body.name;
  const starCount = req.body.starCount;

  const data = {
    username: userName,
    userId: userId,
    message: message,
    date: date,
    name: name,
    starCount,
    starCount
  };
  console.log("data", data);

  const user = new User(data);
  user
    .save() //saves data
    .then(() => res.send(data)) //reply to browser to say data is saved
    .catch(err => console.log(err)); //if error console log error
});

router.get("/getallusers", function(req, res) {
  User.find().then(results => {
    console.log(results); //result = response just like in a promise
    res.send(results);
  });
});

module.exports = router;
