const express =  require("express")
const router = express.Router()
const User = require("../models/user")

//Get All users
router.get("/", (req, res)=>{
    User.find()
    .then((response) => {res.json(response)})
    .catch((err) => {res.json({message: err.message})})
})

//Create new user
router.post("/", (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    })
    user.save()
    .then((response) => {res.json(response)})
    .catch((err) => {res.json({message: err.message})})
})

module.exports = router