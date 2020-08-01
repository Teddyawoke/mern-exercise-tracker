const router = require("express").Router;
let User = require("../models/users.models");

router.route('/').get((req, res) => {  // handles http get request on /users
    User.find()  //mongoose method find all users from atlas promise
        .then(users => res.json(users)) //return in json format
        .catch(err => res.status(400).json("Errors" + err))
})