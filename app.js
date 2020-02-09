require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const route = require("./routes/users")
const app = express()

app.use(express.json())
app.use("/users", route)

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("DB started successfully")})

app.listen(2400, () => {console.log("Server started: 2400")})

module.exports = router