//Recives mongoose library
const mongoose = require("mongoose")

//Saving the data of user (Schema = type of structure)
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// function takes in our model of schema
module.exports = mongoose.model("User", userSchema)